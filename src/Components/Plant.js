import React from "react";
import { plantData } from "./Data/PlantData.js";

import Image from 'react-bootstrap/Image';

const firstPlant = plantData.slice(0, 1)

export const Plant = () => {
  return (
    <>
      <h2 id="Pflanze">Erste Pflanze</h2>
          {firstPlant.map((data, key) => {
            return (
              <Content
                key={key}
                image={data.image}
                name={data.name}
                position={data.position}
                same_plant={data.same_plant}
              /> 
            );
          })}
    </>
  );
};

const Content = ({name, image, position, same_plant}) => {
  return (
    <>     
      <div className="card">
        <Image src={image} className="card-img-top" alt="Pflanze"></Image>
        <div className="card-body">
          <h5 className="card-title">{name}</h5> 
          {(() => {
            if (same_plant) {
              return (
                <p>Die gleiche Pflanzenart befindet sich in der Zielgerade auf Position  <span class="match">#{position}</span>!</p>
              )
            }
          })()}
        </div>
      </div>
    </>
  );
};