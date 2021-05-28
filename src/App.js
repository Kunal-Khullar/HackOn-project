import myfile from './csvjson.json'
import {Magic} from 'magic-sdk';
import {useEffect,useState} from 'react'


function App() {
  // const [data,setData]=useState([]);
  // const getData=()=>{
  //   fetch('csvjson.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  const data = require('./csvjson.json');
  console.log(data)
  return (
    <div className="App">
     {
      //  data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
    </div>
  );
}

export default App;
