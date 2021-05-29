import React, { useState } from "react";
import { Magic } from "magic-sdk";
import { key } from "../../Key";
import {Button,Form} from "react-bootstrap";
import "./login.css";
import { OAuthExtension } from '@magic-ext/oauth';
const Login = () => {
  const magic = new Magic(key, {
    extensions: [new OAuthExtension()],
  });
  const m = new Magic(key);
  const googlog = async ()=>{
    try{
      await magic.oauth.loginWithRedirect({
        provider: 'google' ,
        redirectURI: 'https://auth.magic.link/v1/oauth2/5Az5Oh82h0KV35kyBLvnE83XW7ixbMhawJX_aLZ-9Yk=/callback',
        // scope: ['user:email'], /* optional */
        
      });
      const result = await magic.oauth.getRedirectResult();
      console.log(result)
    }
    catch{

    }
  }
  const fblog = async ()=>{
    try{
      await magic.oauth.loginWithRedirect({
        provider: 'facebook' ,
        redirectURI: 'https://auth.magic.link/v1/oauth2/5Az5Oh82h0KV35kyBLvnE83XW7ixbMhawJX_aLZ-9Yk=/callback',
        // scope: ['user:email'], /* optional */
        
      });
      const result2 = await magic.oauth.getRedirectResult();
      console.log(result2)
    }
    catch{

    }
  }
  const login = async () => {
    console.log(email);
    try {
      const result = await m.auth.loginWithMagicLink({ email: email });
      if(result) {
        window.location.href = '/dashboard'
      }
    } catch {
      // Handle errors if required!
    }
  };
  const [email, setEmail] = useState("");
  return (
    <div id="back">
      <div className="center_card">
        <div className="google">
          <Button className="goog" onClick={()=>googlog()}>
            <img
              className="googe"
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            />
            Sign In With Google
          </Button>
         
        </div>
        <div className="google" id="g2">
        <Button className="goog" onClick={()=>fblog()}>
            <img
              className="googe"
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
            
            Sign In With Facebook
          </Button>
        </div>
        <h4>OR</h4>
        <div className="cred">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label id="formlab">Sign In With Email</Form.Label>
              <Form.Control type="email"value={email}
          onChange={(t) => setEmail(t.target.value)}
          placeholder="Email" />
            </Form.Group>
          </Form>
        </div>
       
        <Button className="btn2" onClick={() => login()}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
