import {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

export const StatusInfo = () => {

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

    // Status Info
    function getData() {
      fetch("https://aqueous-dawn-52031.herokuapp.com/status")
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson);
          console.log(myJson)
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
  })

  return (
    <>
      <h2 id="Infos">Infos</h2>
      <Table>
        <tbody>
          {info.length>0 && info.map((data) => {
            return (
              <TableRow
              name={data.name}
              value={data.value}
            /> 
            );
          })}
          <tr>
            <td>Fahrtzeit</td>
            <td className="text-end">
              {(() => {
                if (info[2]["value"] == "00:00:00" && info[1]["value"] != "00:00:00") {
                  return(
                    <div>
                      {remainingTime.minutes * -1}
                      :
                      {remainingTime.seconds * -1}
                    </div>
                  )
                } else {
                  const endTime = info[2]["value"].split(":")
                  const end = new Date(2022, 2, 25, endTime[0], endTime[1], endTime[2]).valueOf()
                  const diffSeconds = (end - start) / 1000
                  return(
                    <div>
                        {Math.floor(diffSeconds / 60)}
                        :
                        {diffSeconds % 60}
                    </div>
                  )
                }
              })()}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};


const TableRow = ({name, value}) => {
  return (
    <>     
      <tr>
        <td>{name}</td>
        <td className="text-end">{value}</td>
      </tr>
    </>
  );
};