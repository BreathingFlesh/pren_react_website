import {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import { statusData } from "./Data/StatusData";
import Stopwatch from "./Stopwatch";

export const StatusInfo = () => {

  const [info, setData] = useState([]);


  useEffect(() => {
    function getData() {
      fetch("http://127.0.0.1:5000/status")
        .then(function(response){
          console.log("response", response)
          return response.json();
        })
        .then(function(myJson) {
          console.log("Json", myJson)
          setData([myJson]);
        });
    }

    const intervalId = setInterval(() => {
        // gurk = fetch("http://127.0.0.1:5000/status").then(Response=>Response.json())
        getData()
    }, 1000);
    return () => clearInterval(intervalId);
  })

  return (
    <>
      <h2 id="Infos">Infos</h2>
      <Table>
        <tbody>
          {statusData.map((data, key) => {
            return (
              <TableRow
              key={key}
              name={data.name}
              value={data.value}
            /> 
            );
          })}
          <tr>
            <td>Fahrtzeit</td>
            {
              info.length>0 && info.map((item)=><p>{item.some}test</p>)
            }
              {/* <Stopwatch/> */}
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