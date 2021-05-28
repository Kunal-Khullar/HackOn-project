import React,{useState} from 'react'
import {Magic} from 'magic-sdk';
const Login = () => {
    const m = new Magic(process.env.MAGIC_API)
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
