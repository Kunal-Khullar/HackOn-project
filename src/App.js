import myfile from './csvjson.json'
import {Magic} from 'magic-sdk';
import {useEffect,useState} from 'react'
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import Navigator from '../src/routes/Navigator'
function App() {

  const data = require('./csvjson.json');
  console.log(data)
  return (
    <ApolloProvider client={client}>
  <Navigator></Navigator>
</ApolloProvider>
  )
}


export default App