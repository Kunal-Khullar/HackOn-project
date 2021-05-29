import React, { useState, useEffect } from "react";
import MButton from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useMutation,useQuery, gql } from "@apollo/client";
import { ADD_MEAL,ADD_SLEEP,ADD_WATER,GET_MEAL,GET_WATER,GET_SLEEP } from "../../graphql/requests";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./food.css";
import { FormGroup } from "@material-ui/core";
const Food = () => {
  const data = require("../../csvjson.json");
  const [daytime, setTime] = useState("");
  const [sentData, setSentData] = useState(data[0]);
  const [water, setWater] = useState(0);
  const [sleephours,setSleepHours]=useState(0);
  var Calcium,
    Iron,
    Magnesium,
    Phosphorus,
    Potassium,
    Sodium,
    Zinc,
    carbs,
    email,
    fats,
    name,
    omega3,
    proteins,
    vitA,
    vitC,
    vitD,
    vitE;
  const date = new Date();
  useEffect(() => {
    if (date.getHours() > 8 && date.getHours() < 12) {
      setTime("Breakfast");
    } else if (date.getHours() >= 12 && date.getHours() <= 16) {
      setTime("Lunch");
    } else if (date.getHours() > 16 && date.getHours() < 20) {
      setTime("Evening Snacks");
    } else if (date.getHours() >= 20 && date.getHours() <= 22) {
      setTime("Dinner");
    }
    else {
      setTime("Meal")
    }
  }, []);

  const [addMeal, { data: meal, loading: loadingMeal, error: loadingError }] =
    useMutation(ADD_MEAL, {
      variables: {
        Calcium: Calcium,
        Iron: Iron,
        Magnesium: Magnesium,
        Phosphorus: Phosphorus,
        Potassium: Potassium,
        Sodium: Sodium,
        Zinc: Zinc,
        carbs: carbs,
        email: localStorage.getItem('email'),
        fats: fats,
        name: name,
        omega3: omega3,
        proteins: proteins,
        vitA: vitA,
        vitC: vitC,
        vitD: vitD,
        vitE: vitE,
      },
    });
  const [addWater, { data: waterData, loading: loadingWater, error: waterError }] =
    useMutation(ADD_WATER, {
      variables: {
       email:localStorage.getItem('email'),
       glass:water
      },
    });
  const [addSleep, { data: sleepData, loading: loadingSleep, error: sleepError }] =
    useMutation(ADD_SLEEP, {
      variables: {
       email:localStorage.getItem('email'),
       sleephours:sleephours
      },
    });
    const {data:mealData}=useQuery(
      GET_MEAL,{
        variables:{
          email:localStorage.getItem('email')
        }
      }
    )
    const {data:waterQData}=useQuery(
      GET_WATER,{
        variables:{
          email:localStorage.getItem('email')
        }
      }
    )
    const {data:sleepQData}=useQuery(
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
var dateArr=[]
if(sleepQData){
  sleepQData.getUserSleepData.map((ele)=>{
    sleepArr.push(ele.sleephours)
    sleepDate.push(ele.date.slice(0,10))
  })

}
if(waterQData){
  waterQData.getUserWaterData.map((ele)=>{
    waterArr.push(ele.quantitylitre)
    waterDate.push(ele.date.slice(0,10))
  })
}
if(mealData){
  mealData.getUserMealData.map((ele)=>{
dateArr.push(ele.date.slice(0,10))
  })

}
  const addMealAsync = async () => {
    Calcium = parseFloat(sentData.calcium)
    Iron = parseFloat(sentData.irom)
    Magnesium = parseFloat(sentData.magnesium)
    Phosphorus = parseFloat(sentData.phosphorous)
    Potassium = parseFloat(sentData.potassium)
    Sodium = parseFloat(sentData.sodium)
    Zinc = parseFloat(sentData.zink)
    carbs = parseFloat(sentData.carbohydrate)
    fats = parseFloat(sentData.fat)
    name = sentData.name
    omega3 = parseFloat(sentData.calories)
    proteins = parseFloat(sentData.protein)
    vitA = parseFloat(sentData.vitamin_a)
    vitC = parseFloat(sentData.vitamin_c)
    vitD = parseFloat(sentData.vitamin_d)
    vitE = parseFloat(sentData.vitamin_e)
    console.log(sentData)
    console.log(Calcium, Iron, Potassium, Sodium, Zinc, carbs, fats, name, omega3, proteins, vitA, vitC, vitD, vitE)
    console.log(localStorage.getItem('email'))
    const { data } = await addMeal({
      variables: {
        Calcium: Calcium,
        Iron: Iron,
        Magnesium: Magnesium,
        Phosphorus: Phosphorus,
        Potassium: Potassium,
        Sodium: Sodium,
        Zinc: Zinc,
        carbs: carbs,
        email: localStorage.getItem('email'),
        fats: fats,
        name: name,
        omega3: omega3,
        proteins: proteins,
        vitA: vitA,
        vitC: vitC,
        vitD: vitD,
        vitE: vitE,
      }
    });
    console.log(data)

  };
  const addSleepAsync = async ()=>{
    const {data}= await addSleep()
    console.log(data)
  }
  const ChangeWaterAsync=async()=>{
    const { data } = await addWater();
    console.log(data);
  }
  return (
    <div>
      <Row>
        <Col id="left" className="col-md-4">
          <div className="foodintake">
            <h3>Track Your Meals</h3>
            <div className="mealtrack">

              <div class="foodDropdown">
                <Autocomplete
                  id="combo-box-demo"
                  options={data}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  value={sentData}
                  onChange={(event, newValue) => {
                    setSentData(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" />
                  )}
                />
                <MButton id='mealadder'
                  onClick={() => addMealAsync()}
                  variant="contained"
                  color="dark"
                >
                  Add {daytime} (100g)
                </MButton>
              </div>
              <h6 className="last">Last Input on {dateArr[dateArr.length-1]}</h6>
            </div>
           
          </div>
        </Col>
        <Col >
            <div id='midle'>
               
            <h3>Track Sleep</h3>
            <div id='='i2>
            <Form.Group controlId="formBasicEmail">
            
              <Form.Control type="number" value={sleephours}
                onChange={(t) => setSleepHours(t.target.value)}
                placeholder="Sleep Hours" />
            </Form.Group>
            <Button onClick={()=>addSleepAsync()} className="sleepbtn">ADD sleep</Button>
            <h6 className="last">Last Input on {sleepDate[sleepDate.length-1]}</h6> 
            </div>
           
            </div>
        </Col>
        <Col className="col-md-4" id="right">
          <div class="watercounters">
            <h3 >Track Water Intake</h3>
            <div id="waters">
              <h5>Add Glass</h5>
              <MButton
                className="water"
                onClick={() => {setWater(water - 1)
                  ChangeWaterAsync()
                
                }}
                variant="contained"
                color="primary"
              >
                -
              </MButton>
              <h2>{water}</h2>
              <MButton
                className="water"
                onClick={() => {setWater(water + 1)
                  ChangeWaterAsync()}}
                variant="contained"
                color="primary"
              >
                +
              </MButton>
              <br></br>
            </div>
            <h6 className="last">Last Input on {waterDate[waterDate.length-1]}</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Food;
