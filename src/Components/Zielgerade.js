import React from "react";
import { plantData } from "./Data/PlantData.js";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const remainingPlants = plantData.slice(1)

export const Zielgerade = () => {
  return (
    <>
      <div className="plant-container">
        <h2 id="Zielgerade">Zielgerade</h2>
        <Row>
          {remainingPlants.map((data, key) => {
            return (
              <Plant
                key={key}
                image={data.image}
                name={data.name}
                position={data.position}
                same_plant={data.same_plant}
              /> 
            );
          })}
        </Row>
      </div>
    </>
  );
};

const Plant = ({name, image, position, same_plant}) => {
  return (
    <>     
      <Col className="col-6 col-sm-4">
        <div className={`card ${same_plant ? "match" : ""}`}>
          <Image src={image} className="card-img-top" alt="Pflanze"></Image>
          <div className="card-body">
            <h5 className="card-title">{name}</h5> 
              <p>Position #{position}
              </p>
          </div>
        </div>
      </Col>
    </>
  );
};