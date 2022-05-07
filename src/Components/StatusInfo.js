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