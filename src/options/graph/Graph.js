import React from 'react'
import MButton from '@material-ui/core/Button';
import {Button,Row,Col} from 'react-bootstrap'
import './graph.css'
const Graph = () => {
    return (
        <div>
           <div className='graph_container'>
               <h2>Your Monthly Diet Analytics</h2>
               <Row>
                   <Col id='leftgraphs'>
                   <Row id='i1'> 
                       <h6>Proteins</h6>
                       <h6>Carbs</h6>
                       <h6>Fats</h6>
                       <h6>Vitamins</h6>
                   </Row>
                   <div className='allgraphs'>

                   </div>
                   </Col>
                   <Col id='rightgraphs'></Col>
               </Row>
           </div>
        </div>
    )
}

export default Graph
