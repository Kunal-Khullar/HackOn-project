import React, { useState, useEffect } from "react";
import MButton from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useMutation, gql } from "@apollo/client";
import { ADD_MEAL } from "../../graphql/requests";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./food.css";
const Food = () => {
  const data = require("../../csvjson.json");
  const [daytime, setTime] = useState("");
  const [sentData, setSentData] = useState(data[0]);
  const [water, setWater] = useState(0);
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
    const { data } = await addMeal();

  };
  return (
    <div>
      <Row>
        <Col id="left" className="col-md-7">
          <div className="foodintake">
            <h2>Track Your Meals</h2>
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
                  Add {daytime}
                </MButton>
              </div>
            </div>
            <h6>Last Input at: 5:00</h6>
          </div>
        </Col>
        <Col className="col-md-5" id="right">
          <div class="watercounters">
            <h3 >Track Water Intake</h3>
            <div id="waters">
              <h5>Add Glass</h5>
              <MButton
                className="water"
                onClick={() => setWater(water - 1)}
                variant="contained"
                color="primary"
              >
                -
              </MButton>
              <h2>{water}</h2>
              <MButton
                className="water"
                onClick={() => setWater(water + 1)}
                variant="contained"
                color="primary"
              >
                +
              </MButton>
              <br></br>
            </div>
            <h7 id="last">Last Input at 6:43:12</h7>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Food;
