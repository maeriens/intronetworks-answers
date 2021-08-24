import React, { Fragment, useState } from 'react';
const rowInitState = { first: '', second: '', weight: '', bg: null };



const Exercise11Table = ({ data }) => {
  const [firstRow, setFirstRow] = useState(rowInitState);
  const [secondRow, setSecondRow] = useState(rowInitState);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleFirst = ({ name, value }) => {
    setFirstRow({ ...firstRow, [name]: value.toUpperCase() })
  }

  const handleSecond = ({ name, value }) => {
    setSecondRow({ ...secondRow, [name]: value.toUpperCase() })
  }

  const check = () => {
    const [firstData, secondData] = data;

    if (firstRow.first === firstRow.second) return false;
    if (firstRow.weight !== firstData.weight) return false;
    if (firstData.switches.includes(firstRow.first) && firstData.switches.includes(firstRow.second)) {
      return true
    }

    if (secondData.first === secondData.second) return false;
    if (secondData.weight !== firstData.weight) return false;
    if (firstData.switches.includes(secondData.first) && firstData.switches.includes(secondData.second)) {
      return true
    }
  }

  const runChecks = () => {
    setFirstRow({ ...firstRow, bg: check() ? 'ok' : 'error' })
    setSecondRow({ ...secondRow, bg: check() ? 'ok' : 'error' })
  }

  return (
    <Fragment>
      <table>
        <thead>
          <tr><th colSpan='2'>Switches</th><th>Min Cost</th></tr></thead>
        <tbody>
          <tr>
            <td><input name='first' onChange={e => handleFirst(e.target)} value={firstRow.first} /></td>
            <td><input name='second' onChange={e => handleFirst(e.target)} value={firstRow.second} /></td>
            <td><input type='number' name='weight' onChange={e => handleFirst(e.target)} value={firstRow.weight} /></td>
            <td style={{ width: '25px' }} className={firstRow.bg}>{firstRow.bg}</td>
          </tr>
          <tr>
            <td><input name='first' onChange={e => handleSecond(e.target.value)} value={secondRow.first} /></td>
            <td><input name='second' onChange={e => handleSecond(e.target.value)} value={secondRow.second} /></td>
            <td><input type='number' name='weight' onChange={e => handleSecond(e.target.value)} value={secondRow.weight} /></td>
            <td style={{ width: '25px' }} className={secondRow.bg}>{secondRow.bg}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={runChecks}>Check</button>
      <button onClick={() => setShowAnswers(true)}>Show Answers</button>
      <div>
        {showAnswers && <p>First switches are {data[0].switches.join('. ')}, minimum weight is {data[0].weight}.</p>}
        {showAnswers && <p>Second switches are {data[1].switches.join('. ')}, minimum weight is {data[1].weight}.</p>}
      </div>
    </Fragment>
  )
}

export default Exercise11Table
