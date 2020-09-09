import React, { useState, useEffect } from 'react';
import '../index.css'

function TableGroup({ tableData, check, background }) {

  const [stateAnswer, setAnswer] = useState({});

  const handleChange = (val, key, j) => {
    const newAnswers = { ...stateAnswer }
    newAnswers[key][j] = val.toUpperCase();
    setAnswer(newAnswers)
  }

  const submit = (e) => {
    e.preventDefault();
    check(stateAnswer);
  }

  useEffect(() => {
    // Spread syntax did not work for ex2 onwards
    setAnswer(JSON.parse(JSON.stringify(background)))
  }, [])


  return (
    <form>
      <div>
        {Object.keys(tableData).map((header) => (
          <table key={header}>
            <thead><tr><th colSpan="2">{header}</th></tr></thead>
            <thead><tr><th>destination</th><th>next_hop</th></tr></thead>
            <tbody>
              {tableData[header].map((dest, j) => (
                <tr key={dest}>
                  <td>{dest}</td>
                  <td>
                    <input
                      className='uppercased'
                      type="text"
                      onChange={({ target }) => handleChange(target.value, header, j)} />
                  </td>
                  <td className={`result ${background[header][j]}`}>
                    {background[header][j]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
      <button type="submit" onClick={submit}>Submit</button>
    </form>
  )
}

export default TableGroup;
