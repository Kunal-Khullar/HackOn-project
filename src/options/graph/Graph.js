import React, { useState, useEffect } from "react";
import MButton from "@material-ui/core/Button";
import { Button, Row, Col } from "react-bootstrap";
import "./graph.css";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Graph = () => {
  const [ref, setRef] = useState(React.createRef());
  const GraphComp = () => {
    const data = {
      labels: ["Protein", "Carbs", "Fats", "Vitamins", "Minerals","a","b","c"],
      datasets: [
        {
          label: "My First Dataset",
          data: [15, 12, 12, 11, 44,12,21,12],
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
  return (
    <div>
      <div className="graph_container">
        <h2>Your Monthly Diet and Routine Analytics</h2>
        <Row>
          <Col id="leftgraphs">
            <Row id="i1">
              <h6>Proteins</h6>
              <h6>Carbs</h6>
              <h6>Fats</h6>
              <h6>Vitamins</h6>
              <div></div>
            </Row>
            <div className="allgraphs">
              <GraphComp></GraphComp>
            </div>
          </Col>
          <Col id="rightgraphs">
            <Row id="i2">
              <h6>Water Intake</h6>
              <h6>Sleep Cycle</h6>
              <h6>Nutrient</h6>
              <h6>Nutrient</h6>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Graph;
