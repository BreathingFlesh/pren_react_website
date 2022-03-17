import React from "react"; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { StatusInfo } from "./Components/StatusInfo";
import { Plant } from "./Components/Plant";
import { Plants } from "./Components/Zielgerade";
import { Zielgerade } from "./Components/Zielgerade";


function App() {

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navigation></Navigation>
      <main className="flex-fill">
        <Container>
          <Row>
            <Col className="col-md-3">
              <StatusInfo></StatusInfo>
            </Col>  
            <Col className="col-md-3">
              <Plant></Plant>
            </Col>  
            <Col className="col-md-6">
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