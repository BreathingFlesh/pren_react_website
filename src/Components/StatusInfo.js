import React from "react";
import Table from 'react-bootstrap/Table';
import { statusData } from "./Data/StatusData";
import Stopwatch from "./Stopwatch";

export const StatusInfo = () => {
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
              <Stopwatch/>
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