import React from "react";
import Table from 'react-bootstrap/Table';

export const StatusInfo = () => {
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