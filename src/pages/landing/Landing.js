import react from 'react';
import './landing.css' 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

  
const Landing = () => {

    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Health_Prediction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <a href="/login"><Button className='mybtn'>Log In</Button></a>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
      <div >
      <div className="main">
          <Row>
              <Col className="col-md-6">
                <div className="info">
                <h2>Gaymax</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be the industry's standard dummy text ever since the 1500s,</p>
            <Button className="mybtn">Register</Button>
                </div>
                   </Col>
              <Col id="gif1" className="col-md-6">
            
                <img src="https://firebasestorage.googleapis.com/v0/b/galleria-mart.appspot.com/o/24867-online-doctor-app.gif?alt=media&token=357979cf-0918-4803-964a-b2d9fbc6bb5e"></img>
       
              </Col>
          </Row>
      </div>
      </div>
        </div>
    )
}

export default Landing
