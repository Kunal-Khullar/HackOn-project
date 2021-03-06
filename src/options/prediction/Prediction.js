import React,{useState} from 'react'
import './prediction.css'
import {Row,Col,Button} from 'react-bootstrap'
import {GET_PREDICTION} from '../../graphql/requests'
import {useQuery} from '@apollo/client'
const Prediction = () => {
  var p="";
        const [visible,setVisible] = useState(false)
        const {data:predictData,error:predictError}=useQuery(
            GET_PREDICTION,{
              variables:{
                email:localStorage.getItem('email')
              }
            }
          )
    if(predictError){
      console.log("ERRRRRRR",predictError)
      p="Not Enough Data"
    }
    if(predictData){
      console.log(predictData)
      p=predictData.predict
    }
    const setPred=()=>{
setVisible(true);
    }
    return (
        <div id='pred'>
           <div className="bot">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               <Button onClick={()=>setPred()}>PREDICT</Button>
               <p>Result: {visible?p:""} </p>
           </div>
        </div>
    )
}

export default Prediction
