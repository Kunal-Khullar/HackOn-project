import React from 'react'
import './landing.css' 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import mygif from './Diet.gif'
const Landing = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Health_Prediction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link>
            <Button className='secondary'>Log In</Button>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
      <div className="main">
          <Row>
              <Col className="col-md-5">
                  <h2>Gaymax</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </Col>
              <Col id="gif1" className="col-md-7">
                  <img src={mygif} ></img>
                  
              </Col>
          </Row>
      </div>
        </div>
    )
}

export default Landing
