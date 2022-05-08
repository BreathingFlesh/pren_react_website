import Table from 'react-bootstrap/Table';

export const StatusInfo = ({info, remainingTime, start}) => {

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