import myfile from './csvjson.json'
import {Magic} from 'magic-sdk';
import {useEffect,useState} from 'react'
import Login from './pages/auth/login'



const App=()=>{

// useEffect(() => {
  

// }, [input])
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
    <Login/>
    </div>
  );
}

export default App;
