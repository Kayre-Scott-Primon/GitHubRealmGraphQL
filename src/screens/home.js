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
            repositories(last: 5) {
               nodes {
                 name
                 id
               }
             }
          }
        }
     `

     //deve-se ter apenas uma query, ou seja, tem que se buscar todos os arquivos que se queira apenas com uma query

     // obrigatorio ter o loading, se tentar aceesar o objeto antes de finalizar ele crasha

     // nao pode deixar o token no github, criar um arquivo com o nome de kayAuthenticator e exportar a TOKEN_TAP

export default function ScreenHome() {

     const { data, loading } = useQuery(QUERY)

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