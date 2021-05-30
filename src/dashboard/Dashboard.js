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
            <Navbar bg="light" expand="lg" fixed='top'>
        <Navbar.Brand href="#home">WeCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#graph">Analytics</Nav.Link>
            <Nav.Link href="#food">Diet</Nav.Link>
            <Nav.Link href="#pred">Prediction</Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
                    <div className='mid_container' >
                        <Row>
                           
                            <Col className='col-md-12'>
                                <Food></Food>
                                <Graph></Graph>
                                <Prediction></Prediction>
                            </Col>
                        </Row>
                    </div>
                </div>
          
        </HashRouter>

    )
}

export default Dashboard