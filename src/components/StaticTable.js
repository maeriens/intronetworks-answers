import React from 'react'

const StaticTable = ({ header, values }) => {
  let tableValues = [];
  values.forEach(value => tableValues.push(value))

  return (
    <div>
      <table key={header}>
        <thead><tr><th colSpan="2">{header}</th></tr></thead>
        <thead><tr><th>destination</th><th>next_hop</th></tr></thead>
        <tbody>
          {tableValues.map(tableData => (
            <tr key={tableData[0]}>
              <td>{tableData[0]}</td>
              <td>
                <input
                  className='uppercased'
                  type="text"
                  readOnly
                  value={tableData[1]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default StaticTable
