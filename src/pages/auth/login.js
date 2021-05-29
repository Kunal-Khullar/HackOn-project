import React, { useState } from "react";
import { Magic } from "magic-sdk";
import { key } from "../../Key";
import {Button,Form} from "react-bootstrap";
import "./login.css";
const Login = () => {
  const m = new Magic(key);

  const login = async () => {
    console.log(email);
    try {
      await m.auth.loginWithMagicLink({ email: email });
    } catch {
      // Handle errors if required!
    }
  };
  const [email, setEmail] = useState("");
  return (
    <div id="back">
      <div className="center_card">
        <div className="google">
          <Button className="goog">
            <img
              className="googe"
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            />
            Sign In With Google
          </Button>
         
        </div>
        <div className="google" id="g2">
        <Button className="goog">
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
