import React from "react";
import { plantData } from "./Data/PlantsData_test.js";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Zielgerade = () => {
  return (
    <>
      <div className="plant-container">
        <h2 id="Pflanze">Zielgerade</h2>
        <Row>
          {plantData.map((data, key) => {
            return (
              <Plant
                key={key}
                name={data.name}
                img={data.img}
              /> 
            );
          })}
        </Row>
      </div>
    </>
  );
};

const Plant = ({name, img}) => {
  return (
    <>     
      <Col className="col-sm-4">
        <div className="card">
          <Image src="assets/img/{img}" className="card-img-top d-md-block d-none" alt="Pflanze"></Image>
          <div className="card-body">
            <h5 className="card-title">{name}</h5> 
            Position #3<br></br>
          </div>
        </div>
      </Col>
    </>
  );
};