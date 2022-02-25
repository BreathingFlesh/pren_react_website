import React from "react";

export const Plant = () => {
  return (
    <>
        <h2 id="Pflanze">Pflanze</h2>
        <div class="card">
          <img src="../assets/img/Pfefferminze.jpg" class="card-img-top" alt="Pfefferminze"></img>
          <div class="card-body">
            <h5 class="card-title">Pfefferminz</h5> 
            <p>Die gleiche Pflanzenart befindet sich in der Zielgerade auf Position <span class="match">#2</span>!</p>
          </div>
        </div>
    </>
  );
};