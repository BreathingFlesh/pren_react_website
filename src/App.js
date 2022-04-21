import React from "react"; 
import {useState, useEffect} from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { StatusInfo } from "./Components/StatusInfo";
import {getRemainingTimeUntilMsTimestamp} from './Components/Utils/CountdownTimerUtils';
import { Plant } from "./Components/Plant";
import { Zielgerade } from "./Components/Zielgerade";


function App() {

  // Plants
  const [plants, setPlants] = useState([
  ]);

  // Status Info
  const [info, setData] = useState([    
    {
        'name': 'Gefahrene Meter',
        'value': '0 m'
    },
    {
        'name': 'Zeit bei Start',
        'value': '00:00:00'
    },
    {
        'name': 'Zeit bei Ziel',
        'value': '00:00:00'
    }
  ]);

  //Countdown Timer
  const defaultRemainingTime = {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00'
  }
  const startTime = info[1]["value"].split(":")
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const start = new Date(2022, 2, 25, startTime[0], startTime[1], startTime[2]).valueOf()

  // Fetch Status Info & Plants
  function getData() {
    // Don't fetch for now
    // fetch("https://aqueous-dawn-52031.herokuapp.com/status")
    fetch("http://127.0.0.1:5000/status")
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson);
        // console.log(myJson)
      });
    fetch("http://127.0.0.1:5000/plants")
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setPlants(myJson);
        // console.log(myJson)
      });
  }

  //Countdown Timer
  function updateRemainingTime() {
    var time = getRemainingTimeUntilMsTimestamp(start)
    setRemainingTime(getRemainingTimeUntilMsTimestamp(start));
  }

  useEffect(() => {
      const intervalId = setInterval(() => {  
          getData();     
          updateRemainingTime();
          }, 1000);
          return () => clearInterval(intervalId);
  })

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navigation></Navigation>
      <main className="flex-fill">
        <Container>
          <Row>
            <Col className="col-12 col-md-3">
              <StatusInfo 
                info={info}
                remainingTime={remainingTime}
                start={start}
              />
            </Col> 
            <Col className="col-12 col-md-3">
              <Plant></Plant>
            </Col>  
            <Col className="col-12 col-md-6">
              <Zielgerade></Zielgerade>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;