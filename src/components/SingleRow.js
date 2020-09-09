import React, { useState, Fragment } from "react";
import './SingleRow.css';

const SingleRow = ({ correctAnswers, destination, inputsLength, start, hintContent, answerContent }) => {

  const [rowAnswers, setRowAnswers] = useState(Array(inputsLength).join('.').split('.'));
  const [answerResult, setAnswersResult] = useState(false);
  const [hint, showHint] = useState(false);
  const [answer, showAnswer] = useState(false);

  const handleChange = (value, i) => {
    const newValues = [...rowAnswers]
    newValues[i] = value.toUpperCase();
    setRowAnswers(newValues)
  }

  const checkAnswers = () => {
    const areAllOk = correctAnswers.every((ans, i) => ans === rowAnswers[i])
    setAnswersResult(areAllOk ? 'ok' : 'error')
  }

  let inputs = [];
  for (let i = 0; i < inputsLength; i++) {
    inputs.push(
      <Fragment key={i}>
        <td>
          <input
            value={rowAnswers[i]}
            onChange={e => handleChange(e.target.value, i)}
            className='single_answer'
          />
        </td>
      </Fragment>
    );
  }

  return (
    <div className='flex center'>
      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th colSpan={inputsLength}>Hops</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{start}</td>
            {inputs && inputs.map(item => item)}
            <td>{destination}</td>
            <td className={'single_answer_check ' + answerResult}>{answerResult}</td>
          </tr>
        </tbody>
      </table>

      <div className='buttons_wrapper'>
        <button onClick={() => checkAnswers()}>Check</button>
        {!hint && <button onClick={() => showHint(true)}>Hint</button>}
        {hint && <button onClick={() => showAnswer(true)}>Show Answer</button>}
      </div>
      {hint && !answer && <span>{hintContent}</span>}
      {answer && <span>{answerContent}</span>}
    </div>
  )
}

export default SingleRow
