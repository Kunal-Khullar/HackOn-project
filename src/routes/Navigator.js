import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../pages/auth/login'
import Landing from '../pages/landing/Landing'
import Register from '../pages/auth/Register'
import Dashboard from '../dashboard/Dashboard'
const Navigator = () => {
    return (
        <div>
        <Router>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />{" "}
          <Route path="/login" exact component={() => <Login />} />{" "}
          {/* <Route path="/" exact component={() => < />} />{" "} */}
          <Route path="/register" exact component={()=><Register />}/>{" "}
          <Route path="/dashboard" exact component={()=><Dashboard />}/>{" "}
        </Switch>
      </Router>{" "}
        </div>
    )
}

export default Navigator
