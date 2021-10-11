import React, { useEffect } from "react";
import {
     View,
     Text,
     FlatList
} from 'react-native'
import { gql, useQuery } from '@apollo/client'
import Realm  from "realm";

const QUERY = gql`
     query {
          viewer {
            login
            id
            repositories(last: 1) {
               nodes {
                 name
                 id
               }
             }
          }
        }
     `

     const Repo = {
          name: 'repository',
          properties: {
               name: {
                    type: 'string'
               },
               id: {
                    type: 'string'
               }
          }
     }

     const Schema = {
          name: "GitHub",
          properties: {
            id: "string",
            user: "string",
            repo: {
               type: 'list',
               objectType: 'repository'
            }
          }
     }

     // deve-se ter apenas uma query, ou seja, tem que se buscar todos os arquivos que se queira apenas com uma query

     // obrigatorio ter o loading, se tentar aceesar o objeto antes de finalizar ele crasha

     // nao pode deixar o token no github, criar um arquivo com o nome de kayAuthenticator e exportar a TOKEN_TAP

export default function ScreenHome() {

     const { data, loading } = useQuery(QUERY)

     const saveRealm = async (data) => {
          const realm = await Realm.open({
               path: "github",
               schema: [Schema, Repo],
          });

          //lendo ...
          const readRealm = await realm.objects("GitHub");
          console.log('leitura: ' + readRealm)

          //escrevendo...
          await realm.write(async () => {
               const obj = await realm.create("GitHub", {
                    id: data.viewer.id,
                    user: data.viewer.login,
                    repo: [
                         {name: data.viewer.repositories.nodes[0].name, id: data.viewer.repositories.nodes[0].id}
                    ]
               });
               console.log(`created: ${obj}`);
          })
     }

     const readRealm = async () => {
          const realm = await Realm.open({
               path: "github",
               schema: [Schema, Repo],
          });
          //lendo ...
          const readRealm = await realm.objects("GitHub");
          console.log('leitura: ' + JSON.stringify(readRealm[0]))
     }

     const deleteRealm = async () => {
          const realm = await Realm.open({
               path: "github",
               schema: [Schema, Repo],
          });
          // excluindo ...
          realm.write(() => realm.deleteAll())
          console.log('Deletados!')
     }

     const updateRealm = async (data) => {
          const realm = await Realm.open({
               path: "github",
               schema: [Schema, Repo],
          });

          //lendo antes...
          const readRealmB = await realm.objects("GitHub");
          console.log('leitura antes: ' + JSON.stringify(readRealmB))

          //atualizando...
          await realm.write(async () => {
               var obj = realm.objects('GitHub').filtered('id = "' + data.viewer.id + '"')
               console.log('obj: ' + JSON.stringify(obj[0]))
               obj[0].repo[0].name = data.viewer.repositories.nodes[0].name 
               console.log(`updated: ${JSON.stringify(obj[0])}`);
          })

          //lendo depois ...
          const readRealmA = await realm.objects("GitHub");
          console.log('leitura depois: ' + JSON.stringify(readRealmA))
     }

     useEffect(() => {
          if(!loading){
               //saveRealm(data)
               readRealm()
               //deleteRealm()
               updateRealm(data)
          }
     },[loading])

     useEffect(() => {
          console.log('data ' + data, loading)
     },[data, loading])

     return(
          <View style={{backgroundColor: '#8c258d', flex: 1}}>
               <View style={{margin: 25}}>
                    <Text style={{color: '#fff', fontSize: 25, justifyContent: 'center', alignSelf: 'center'}}>loading : {loading ? 'true' : 'false'}</Text>
                    {!loading ? 
                         <>
                              <Text style={{color: '#fff', fontSize: 25, justifyContent: 'center', alignSelf: 'center'}}>Resposta1: {data.viewer.login}</Text>
                              <Text style={{color: '#fff', fontSize: 25, justifyContent: 'center', alignSelf: 'center'}}>Resposta2: {data.viewer.id}</Text>
                              <FlatList
                                   data={data.viewer.repositories.nodes}
                                   style={{marginVertical: 25}}
                                   keyExtractor={item => String(item.id)}
                                   renderItem={({item: item}) => (
                                        <Text style={{color: '#fff', fontSize: 25, justifyContent: 'center', alignSelf: 'flex-start'}}>Repo: {item.name}</Text>
                                   )}
                              />
                         </>
                         : false
                    }
               </View>
          </View>
     )
}

/*
https://dev.to/imjoshellis/how-to-build-an-automated-portfolio-using-github-s-graphql-api-and-react-5bii
https://docs.github.com/en/graphql/overview/explorer
https://docs.github.com/pt/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql
*/