import React from "react";
import { plantData } from "./data";


export const Plants = () => {
  return (
    <>
      <div className="plant-container">
        {plantData.map((data, key) => {
          return (
            <div key={key}>
              {data.name}
            </div>
          );
        })}
      </div>
    </>
  );
};