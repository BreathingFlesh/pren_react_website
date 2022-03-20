import React, { useState, useEffect } from "react";
import { statusData } from "./Data/StatusData";

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        //min Code. Help! :(
        if (statusData[1]["value"] !== "00:00:00") {
            setRunning(true)
        }
        if (statusData[2]["value"] !== "00:00:00") {
            setRunning(false)
        }

      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}

        </div>
        <div className="buttons">
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => setTime(0)}>Reset</button>       
        </div>
      </div>
    );
  };

  export default Stopwatch;