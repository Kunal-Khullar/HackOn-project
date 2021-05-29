import React, { useState } from "react";
import { Magic } from "magic-sdk";
import { key } from "../../Key";
import {Button,Form} from "react-bootstrap";
import "./register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const m = new Magic(key);

  const register = async () => {
    console.log(email);
    try {
      await m.auth.loginWithMagicLink({ email: email });
    } catch {
      // Handle errors if required!
    }
  };
 
  return (
    <div id="back">
      <div className="center_card">
        <div className="google">
          <Button className="goog">
            <img
              className="googe"
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            />
            Sign Up With Google
          </Button>
         
        </div>
        <div className="google" id="g2">
        <Button className="goog">
            <img
              className="googe"
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
            
            Sign Up With Facebook
          </Button>
        </div>
        <h4>OR</h4>
        <div className="cred">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label id="formlab">Sign Up With Email</Form.Label>
              <Form.Control type="email"value={email}
          onChange={(t) => setEmail(t.target.value)}
          placeholder="Email" />
            </Form.Group>
            <Form.Group>
            <Form.Label id="formlab">Enter Name</Form.Label>
              <Form.Control type="text"value={name}
          onChange={(t) => setName(t.target.value)}
          placeholder="Name" />
            </Form.Group>
          </Form>
        </div>
       
        <Button className="btn2" onClick={() => register()}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Register;
