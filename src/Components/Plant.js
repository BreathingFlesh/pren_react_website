import React from "react";
import { plantData } from "./Data/PlantsData.js";

import Image from 'react-bootstrap/Image';

const firstPlant = plantData.slice(0, 1)

export const Plant = () => {
  return (
    <>
      <h2 id="Pflanze">Pflanze</h2>
          {firstPlant.map((data, key) => {
            return (
              <Content
                key={key}
                image={data.image}
                name={data.name}
                position={data.position}
              /> 
            );
          })}
    </>
  );
};

const Content = ({name, image, position}) => {
  return (
    <>     
      <div className="card">
        <Image src={image} className="card-img-top d-md-block d-none" alt="Pflanze"></Image>
        <div className="card-body">
          <h5 className="card-title">{name}</h5> 
          <p>Die gleiche Pflanzenart befindet sich in der Zielgerade auf Position  <span class="match">#{position}</span>!</p>
        </div>
      </div>
    </>
  );
};