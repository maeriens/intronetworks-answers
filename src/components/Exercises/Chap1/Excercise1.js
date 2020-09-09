import React, { useState } from 'react';
import Table from '../../Table';

const exAnswers = {
  'S1': ['A', 'S2', 'S2', 'S2'],
  'S2': ['S1', 'B', 'S3', 'S4'],
  'S3': ['S2', 'S2', 'C', 'S2'],
  'S4': ['S2', 'S2', 'S2', 'D']
};

const tableData = {
  'S1': ['A', 'B', 'C', 'D'],
  'S2': ['A', 'B', 'C', 'D'],
  'S3': ['A', 'B', 'C', 'D'],
  'S4': ['A', 'B', 'C', 'D'],
}

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {})


function Exercise1() {
  const [background, setBg] = useState(initialState);

  const checkAnswers = uAnswers => {
    const stateBgs = { ...initialState };

    Object.keys(exAnswers).forEach(key => {
      stateBgs[key] = uAnswers[key].map((uAnswer, i) => uAnswer === exAnswers[key][i] ? 'ok' : 'error')
    });

    setBg(stateBgs)
  }

  return (
    <div id='1'>
      <div>
        <p><b>1</b> Give forwarding tables for each of the switches S1-S4 in the following network with destinations
            A, B, C, D. For the next_hop column, give the neighbor on the appropriate link rather than the interface
            number.</p>
      </div>
      <pre className="highlight">
        {`A         B         C
│         │         │
S1───────S2────────S3
          │
          │
          S4───D`}
      </pre>

      <Table
        tableData={tableData}
        check={checkAnswers}
        background={background}
      />
    </div>
  )
}

export default Exercise1
