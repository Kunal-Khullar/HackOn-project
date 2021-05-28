import myfile from './csvjson.json'
import {Magic} from 'magic-sdk';
import {useEffect,useState} from 'react'
import Navigator from '../src/routes/Navigator'
function App() {

  const data = require('./csvjson.json');
  console.log(data)
  return (
    <div>
  <Navigator></Navigator>
</div>
  )
}


export default App