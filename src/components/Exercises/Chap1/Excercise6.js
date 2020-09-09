import React, { useState } from 'react';
import Table from '../../Table';

const exAnswersA = {
  'S1': ['S2', 'S2', 'S4'],
  'S2': ['S1', 'S3', 'S3'],
  'S3': ['S4', 'S2', 'S4'],
  'S4': ['S1', 'S1', 'S3']
};

const exAnswersB = {
  'S1': ['S2', 'S2', 'S2'],
  'S2': ['S1', 'S3', 'S3'],
  'S3': ['S2', 'S2', 'S4'],
  'S4': ['S3', 'S3', 'S3']
};

const tableData = {
  'S1': ['S2', 'S3', 'S4'],
  'S2': ['S1', 'S3', 'S4'],
  'S3': ['S1', 'S2', 'S4'],
  'S4': ['S1', 'S2', 'S3']
}

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {})


function Exercise6() {
  const [backgroundA, setBgA] = useState(initialState);
  const [backgroundB, setBgB] = useState(initialState);

  const checkAnswersA = (uAnswers) => {
    const stateBgs = { ...initialState }
    Object.keys(exAnswersA).forEach(key => {
      stateBgs[key] = exAnswersA[key].map((exAnswer, i) => uAnswers[key][i] === exAnswer ? 'ok' : 'error'
      )
    });
    setBgA(stateBgs)
  }

  const checkAnswersB = (uAnswers) => {
    const stateBgs = { ...initialState }

    Object.keys(exAnswersB).forEach(key => {
      stateBgs[key] = exAnswersB[key].map((exAnswer, i) => uAnswers[key][i] === exAnswer ? 'ok' : 'error'
      )
    });
    setBgB(stateBgs)
  }


  return (
    <div id="6">
      <div>
        <p><b>6</b> Four switches are arranged as below. The destinations are S1 through S4 themselves.</p>
        <ol style={{ listStyleType: 'lower-alpha' }}>
          <li>
            Give the forwarding tables for S1 through S4 assuming packets to adjacent nodes are sent along the connecting link,
            and packets to diagonally opposite nodes are sent clockwise.
          </li>
          <li>Give the forwarding tables for S1 through S4 assuming the S1–S4 link is not used at all, not even for S1⟷S4 traffic.</li>
        </ol>

      </div>
      <pre className="highlight">
        {`S1──────S2
│       │
│       │
S4──────S3`}
      </pre>
      <p><b>a</b></p>
      <Table
        tableData={tableData}
        check={checkAnswersA}
        background={backgroundA}
      />

      <p><b>b</b></p>
      <Table
        tableData={tableData}
        check={checkAnswersB}
        background={backgroundB}
      />
    </div>
  )
}

export default Exercise6;
