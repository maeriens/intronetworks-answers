import React, { useState } from 'react';
import Table from '../../Table'
import Hint from '../../Hint';

const exAnswers = {
  'S1': ['A', 'S2', ['S2', 'S4'], 'S4'],
  'S2': ['S1', 'B', 'S3', ['S1', 'S3']],
  'S3': [['S2', 'S4'], 'S2', 'C', 'S4'],
  'S4': ['S1', ['S1', 'S3'], 'S3', 'D']
};

const tableData = {
  'S1': ['A', 'B', 'C', 'D'],
  'S2': ['A', 'B', 'C', 'D'],
  'S3': ['A', 'B', 'C', 'D'],
  'S4': ['A', 'B', 'C', 'D']
}

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {})


function Exercise2() {
  const [background, setBg] = useState(initialState);

  const checkAnswers = uAnswers => {
    const stateBgs = { ...initialState }

    Object.keys(exAnswers).forEach(switchKey => {
      exAnswers[switchKey].forEach((exDestination, i) => {
        if (Array.isArray(exDestination)) {
          const uParsed = uAnswers[switchKey][i].replace(' ', '').split(',').filter(e => e);
          stateBgs[switchKey][i] = exDestination.every(ex_ans => uParsed.includes(ex_ans)) ? 'ok' : 'error';
        } else {
          stateBgs[switchKey][i] = [exDestination, 'DIRECT', 'LOCAL'].includes(uAnswers[switchKey][i]) ? 'ok' : 'error';
        }
      })
    })

    setBg(stateBgs)
  }


  return (
    <div id='2'>
      <div>
        <p><b>2</b> Give forwarding tables for each of the switches S1-S4 in the following network with destinations
            A, B, C, D. Again, use the neighbor form of next_hop rather than the interface form. Try to keep the route
            to each destination as short as possible. What decision has to be made in this exercise that did not arise
            in the preceding exercise?</p>
        <Hint><b>Hint:</b> if more than one option is possible, provide a comma separated input</Hint>
      </div>
      <pre className="highlight">
        {`A───S1──────S2───B
    │       │
    │       │
D───S4──────S3───C`}
      </pre>

      <Table
        tableData={tableData}
        check={checkAnswers}
        background={background}
      />
    </div>
  )
}

export default Exercise2;
