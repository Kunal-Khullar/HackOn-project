import React,{useState} from 'react'
import {Magic} from 'magic-sdk';
import {key} from '../../Key'
const Login = () => {
    const m = new Magic(key)
    const [email,setEmail]=useState("");
    const login = async ()=>{
        console.log(email)
        try {
            await m.auth.loginWithMagicLink({ email: email });
          } catch {
            // Handle errors if required!
          }
    }
    return (
        <div>
            <h1>hi</h1>
          <input value={email} onChange={(t)=>setEmail(t.target.value)} placeholder="email"></input>  
        <button onClick={()=>login()}>Submit</button>
        </div>
    )
}

export default Login
