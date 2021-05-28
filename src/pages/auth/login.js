import React,{useState} from 'react'
import {Magic} from 'magic-sdk';
import {key} from '../../Key'
import Button from 'react-bootstrap/Button'
import './login.css'
const Login = () => {
    const m = new Magic(key)
  
    const login = async ()=>{
        console.log(email)
        try {
            await m.auth.loginWithMagicLink({ email: email });
          } catch {
            // Handle errors if required!
          }
        }
    const [email,setEmail]=useState("");
    return (
        <div id='back'>
             <div className="center_card">
             <div className="google">
               <Button className="goog"><img id='goog' src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>Sign In With Google</Button>
             </div>
           <input value={email} onChange={(t)=>setEmail(t.target.value)} placeholder="email"></input>  
        <button onClick={()=>login()}>Submit</button>
           </div>
       
        </div>
    )
}

export default Login
