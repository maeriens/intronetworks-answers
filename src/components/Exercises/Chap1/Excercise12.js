import React, { useState } from 'react';
import Table from '../../Table';
import StaticTable from '../../StaticTable';
import Hint from '../../Hint';
import SingleRow from '../../SingleRow';

const exAnswers = {
  'R1': ['LOCAL', 'R4', 'R4'],
  'R2': ['R4', 'LOCAL', 'R4'],
  'R3': ['R4', 'R4', 'LOCAL'],
  'R4': ['R1', 'R2', 'R3']
};

const tableData = {
  'R1': ['200.0.1/24', '200.0.2/24', '200.0.3/24'],
  'R2': ['200.0.1/24', '200.0.2/24', '200.0.3/24'],
  'R3': ['200.0.1/24', '200.0.2/24', '200.0.3/24'],
  'R4': ['200.0.1/24', '200.0.2/24', '200.0.3/24'],
}

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {})


function Exercise12() {

  const [backgrounds, setBg] = useState(initialState);

  const checkAnswers = uAnswers => {

    const stateBgs = { ...initialState };

    Object.keys(exAnswers).forEach(key => {
      stateBgs[key] = uAnswers[key].map((uAnswer, i) => {

        const correctAnswer = exAnswers[key][i];
        if (correctAnswer === 'LOCAL') {
          return ['LOCAL', 'DIRECT'].includes(uAnswer) ? 'ok' : 'error';
        }
        return uAnswer === correctAnswer ? 'ok' : 'error'
      })
    });

    setBg(stateBgs)
  }

  return (
    <div id="12">
      <div>
        <p><b>12</b> Suppose we have the following three Class C IP networks, joined by routers R1–R4. There is no connection to
        the outside Internet. Give the forwarding table for each router. For networks directly connected to a router (eg 200.0.1/24 and R1),
         include the network in the table but list the next hop as <b>direct</b> or <b>local</b>.</p>
        <pre className="highlight">
          {`R1── 200.0.1/24
│
│
│
R4──────────R2── 200.0.2/24
│
│
│
R3── 200.0.3/24`}
        </pre>
      </div>

      <Table
        tableData={tableData}
        check={checkAnswers}
        background={backgrounds}
      />
    </div>
  )
}

export default Exercise12;
