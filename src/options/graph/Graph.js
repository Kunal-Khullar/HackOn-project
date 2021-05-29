import React, { useState, useEffect } from "react";
import MButton from "@material-ui/core/Button";
import { Button, Row, Col } from "react-bootstrap";
import "./graph.css";
import {useQuery} from '@apollo/client';
import { GET_MEAL,GET_WATER,GET_SLEEP } from '../../graphql/requests'
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Graph = () => {
  const [sGdata,setSGData]=useState([]);
  const [label,setLabel1]=useState("")
  const [label2,setLabel2]=useState("")
  const[gData,setGData]=useState([]);
  const [ref, setRef] = useState(React.createRef());
  const [ref2, setRef2] = useState(React.createRef());
  const [sDate,setSDate]=useState([])
  const {data:mealData}=useQuery(
    GET_MEAL,{
      variables:{
        email:localStorage.getItem('email')
      }
    }
  )
  const {data:waterData}=useQuery(
    GET_WATER,{
      variables:{
        email:localStorage.getItem('email')
      }
    }
  )
  const {data:sleepData}=useQuery(
    GET_SLEEP,{
      variables:{
        email:localStorage.getItem('email')
      }
    }
  )

var sleepArr=[]
var waterArr=[]
var sleepDate=[]
var waterDate=[]
var carbArr=[]
var vitArr=[]
var fatArr=[]
var protArr=[]
var dateArr=[]
if(sleepData){
  sleepData.getUserSleepData.map((ele)=>{
    sleepArr.push(ele.sleephours)
    sleepDate.push(ele.date.slice(0,10))
  })

}
if(waterData){
  waterData.getUserWaterData.map((ele)=>{
    waterArr.push(ele.quantitylitre)
    waterDate.push(ele.date.slice(0,10))
  })
}
  if(mealData){
   mealData.getUserMealData.map((ele)=>{
carbArr.push(ele.carbs)
vitArr.push(ele.vitA)
fatArr.push(ele.fats)
protArr.push(ele.proteins)
dateArr.push(ele.date.slice(0,10))
   })

}
  const GraphComp = (props) => {
    
    const data = {
      labels: dateArr,
      datasets: [
        {
          label: props.label,
          data: props.data,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "green",
            "orange",
          ],
        },
      ],
    };
    useEffect(() => {
      
      var myChart = new Chart(ref.current, {
        type: "bar",
        data: data,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }, []);

    return <canvas ref={ref} id="charts" width="220" height="120"></canvas>;
  };
  const SecondGraphComp = (props) => {

    const data = {
      labels: props.date,
      datasets: [
        {
          label: props.label,
          data: props.data,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "green",
            "orange",
          ],
        },
      ],
    };
    useEffect(() => {
      var myChart = new Chart(ref2.current, {
        type: "bar",
        data: data,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }, []);

    return <canvas ref={ref2} id="charts" width="220" height="120"></canvas>;
  };
  return (
    <div>
      <div className="graph_container">
        <h2>Your Monthly Diet and Routine Analytics</h2>
        <Row>
          <Col id="leftgraphs">
            <Row id="i1">
              <h6 onClick={()=>{setLabel1("Proteins");setGData(protArr)}}>Proteins</h6>
              <h6 onClick={()=>{setLabel1("Carbs");setGData(carbArr)}}>Carbs</h6>
              <h6 onClick={()=>{setLabel1("Fats");setGData(fatArr)}}>Fats</h6>
              <h6 onClick={()=>{setLabel1("Vitamins");setGData(vitArr)}}>Vitamins</h6>
              <div></div>
            </Row>
            <div className="allgraphs">
              <GraphComp label={label} data={gData}></GraphComp>
            </div>
          </Col>
          <Col id="rightgraphs">
            <Row id="i2">
              <h6 
              onClick={()=>{
                setSGData(waterArr)
                setSDate(waterDate)
                setLabel2("Water Intake")
              }}>
                Water Intake
              </h6>
              <h6
              onClick={()=>{
                setSGData(sleepArr)
                setSDate(sleepDate)
                setLabel2("Sleep Hours")
              }}
              >
                Sleep Cycle
                </h6>
            
            </Row>
            <div className="allgraphs">
              <SecondGraphComp label = {label2}data={sGdata} date={sDate}></SecondGraphComp>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Graph;
