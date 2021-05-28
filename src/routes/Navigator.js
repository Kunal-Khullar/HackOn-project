import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../pages/auth/login'
import Landing from '../pages/landing/Landing'
const Navigator = () => {
    return (
        <div>
        <Router>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />{" "}
          <Route path="/login" exact component={() => <Login />} />{" "}
          {/* <Route path="/" exact component={() => < />} />{" "} */}
          
        </Switch>
      </Router>{" "}
        </div>
    )
}

export default Navigator
