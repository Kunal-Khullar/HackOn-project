import React from 'react'
import './dash.css'
import {Button,Row,Col,Form} from 'react-bootstrap'
import {Route,HashRouter,NavLink} from 'react-router-dom'
import Graph from '../options/graph/Graph'
import Food from '../options/food/Food'
import Prediction from '../options/prediction/Prediction'
const Dashboard = () => {
    return (
        <HashRouter>
            <div>
        <div id='main'>
            <div className='mid_container'>
                <Row>
                    <Col id='left' className='col-md-4'>
                        <div className='welcome'></div>
                        <div className='navs'>
                            <NavLink exact to='/'>
                                <div className='options'>
                                    <h4>Graphs</h4>
                                </div>
                            </NavLink>
                            <NavLink exact to='/food'>
                                <div className='options'>
                                    <h4>Food</h4>
                                </div>
                            </NavLink>
                            <NavLink exact to='/pred'>
                                <div className='options'>
                                    <h4>Prediction</h4>
                                </div>
                            </NavLink>
                        </div>
                    </Col>
                    <Col className='col-md-8'>
                    <Route exact path="/" component={Graph}></Route>
                  <Route exact path="/food" component={Food}></Route>
                  <Route exact path="/pred" component={Prediction}></Route>
                  
                    </Col>
                </Row>
            </div>
        </div>
        </div>
        </HashRouter>
        
    )
}

export default Dashboard
