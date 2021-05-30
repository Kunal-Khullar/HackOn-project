import React, {useCallback, useState } from "react";
import { Magic } from "magic-sdk";
import { key } from "../../Key";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { useHistory } from "react-router";
import { OAuthExtension } from '@magic-ext/oauth';
const Login = () => {
  const history = useHistory();
  const magic = new Magic(key, {
    extensions: [new OAuthExtension()],
  });
  // const m = new Magic(key);
  const googlog = useCallback(async (provider) => {

    try {
      const res = await magic.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: new URL('https://auth.magic.link/v1/oauth2/5Az5Oh82h0KV35kyBLvnE83XW7ixbMhawJX_aLZ-9Yk=/callback'),
      })
      if(res)
      {
     history.push('/dashboard')
      console.log(res)
      }
    } catch {

    }
    // console.log(res);
  })
  const fblog = useCallback(async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "facebook",
        redirectURI:'https://auth.magic.link/v1/oauth2/5Az5Oh82h0KV35kyBLvnE83XW7ixbMhawJX_aLZ-9Yk=/callback'
        // scope: ['user:email'], /* optional */

      });
      const result2 = await magic.oauth.getRedirectResult();
      console.log(result2)
    }
    catch {

    }
  })
  const login = async () => {
    console.log(email);
    try {
      const result = await magic.auth.loginWithMagicLink({ email: email });
      if (result) {
        localStorage.setItem('email', email)
        window.location.href = '/dashboard'
      }
    } catch {
      // Handle errors if required!
    }
  }
  const [email, setEmail] = useState("");
  return (
    <div id="back">
      <div className="center_card">
        <div className="google">
          <Button className="goog" onClick={() => googlog()}>
            <img
              className="googe"
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            />
            Sign In With Google
          </Button>

        </div>
       it 
        <h4>OR</h4>
        <div className="cred">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label id="formlab">Sign In With Email</Form.Label>
              <Form.Control type="email" value={email}
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
