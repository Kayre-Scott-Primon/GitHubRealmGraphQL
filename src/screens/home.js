import React from "react";
import {
     View,
     Text
} from 'react-native'
import { gql, useQuery } from '@apollo/client'
import Realm  from "realm";

export default function ScreenHome() {

     const QUERY = gql`
          query {
               viewer {
                    login
               }
          }
     `

     const { data, loading } = useQuery(QUERY)

     console.log('data ' + JSON.stringify(data))

     return(
          <View style={{backgroundColor: '#8c258d', flex: 1}}>
               <View style={{margin: 25}}>
                    <Text style={{color: '#fff', fontSize: 25, justifyContent: 'center', alignSelf: 'center'}}>loading : {loading ? 'true' : 'false'}</Text>
                    {!loading ?
                         <Text style={{color: '#fff', fontSize: 25, justifyContent: 'center', alignSelf: 'center'}}>{data.viewer.login}</Text>
                         : false
                    }
               </View>
          </View>
     )
}