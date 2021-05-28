import myfile from './csvjson.json'
import {Magic} from 'magic-sdk';
import {useEffect,useState} from 'react'
import Landing from '../src/landing/Landing';

function App() {

  const data = require('./csvjson.json');
  console.log(data)
  return (
    <Landing></Landing>
  );
}

export default App;
