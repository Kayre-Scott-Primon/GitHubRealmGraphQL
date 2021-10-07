import React from "react"; 
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from "./screens/home";

const cache = new InMemoryCache()

const clientGitHub = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  headers: { Authorization: 'Bearer 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'}
  //credentials: 
})

const Stack = createNativeStackNavigator();

const App = () => (
    <ApolloProvider client={clientGitHub}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ScreenHome} />
            </Stack.Navigator>
        </NavigationContainer>
    </ApolloProvider>
)

export default App