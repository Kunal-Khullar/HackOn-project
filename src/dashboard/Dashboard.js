import React from 'react'
import './dash.css'
import { Button, Row, Col, Form,Navbar,Nav } from 'react-bootstrap'
import { Route, HashRouter, NavLink } from 'react-router-dom'
import Graph from '../options/graph/Graph'
import Food from '../options/food/Food'

import Prediction from '../options/prediction/Prediction'
const Dashboard = () => {

    return (
        <HashRouter>
            <div>
            <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Health_Prediction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/graph">Graphs</NavLink>
            <NavLink exact to="/">Food</NavLink>
            <NavLink exact to="/pred">Prediction</NavLink>
            
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
                    <div className='mid_container'>
                        <Row>
                           
                            <Col className='col-md-12'>
                               
                                <Route exact path="/" component={Food}></Route>
                                <Route exact path="/graph" component={Graph}></Route>
                                <Route exact path="/pred" component={Prediction}></Route>

                            </Col>
                        </Row>
                    </div>
                </div>
          
        </HashRouter>

    )
}

export default Dashboard