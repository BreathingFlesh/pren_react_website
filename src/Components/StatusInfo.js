import React from "react";
import Table from 'react-bootstrap/Table';
import { statusData } from "./Data/StatusData";

export const StatusInfoalt = () => {
  return (
    <>
      <h2 id="Infos">Infos</h2>
      <Table>
        <tr>
          <td>Zeit bei Start</td>
          <td>13:01:23</td>
        </tr>
        <tr>
          <td>Fahrtzeit</td>
          <td>00:02:02</td>
        </tr>
        <tr>
          <td>Gefahrene Meter</td>
          <td>22 m</td>
        </tr>
        <tr>
          <td>Zeit bei Ziel</td>
          <td>...</td>
        </tr>
      </Table>
    </>
  );
};

export const StatusInfo = () => {
  return (
    <>
      <h2 id="Infos">Infos</h2>
      <Table>
        {statusData.map((data, key) => {
          return (
            <TableRow
            key={key}
            name={data.name}
            value={data.value}
          /> 
          );
        })}
      </Table>
    </>
  );
};


const TableRow = ({name, value}) => {
  return (
    <>     
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};