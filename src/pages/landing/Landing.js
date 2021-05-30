import react from 'react';
import './landing.css' 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

  
const Landing = () => {
  const goto = async()=>{
    window.location.href = '/register'
  }
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">WeCare</Navbar.Brand>
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
                <h2>WeCare</h2>
                  <p>Our website acts as a platform for users where they can evaluate their daily routines and get relevant information regarding the possible diseases/problems they might face in the near future.Right now, the users just have to input their meals,water intake and sleep hours and our model will try to predict based on the data input what problems the user might face. Users can also view their daily analytics. Our website serves as a medium for the users to see what they are doing wrong.</p>
            <Button onClick={()=>{goto()}} className="mybtn">Register</Button>
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
