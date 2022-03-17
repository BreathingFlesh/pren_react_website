import React from "react";
import { plantData } from "./Data/PlantsData.js";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Zielgerade = () => {
  return (
    <>
      <div className="plant-container">
        <h2 id="Zielgerade">Zielgerade</h2>
        <Row>
          {plantData.map((data, key) => {
            return (
              <Plant
                key={key}
                image={data.image}
                name={data.name}
                position={data.position}
              /> 
            );
          })}
        </Row>
      </div>
    </>
  );
};

const Plant = ({name, image, position}) => {
  return (
    <>     
      <Col className="col-sm-4">
        <div className="card">
          <Image src={image} className="card-img-top d-md-block d-none" alt="Pflanze"></Image>
          <div className="card-body">
            <h5 className="card-title">{name}</h5> 
            <p>Position #{position}<br></br></p>
          </div>
        </div>
      </Col>
    </>
  );
};