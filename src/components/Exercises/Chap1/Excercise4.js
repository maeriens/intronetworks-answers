import React, { useState } from 'react';
import Table from '../../Table';
import Hint from '../../Hint';
import img from '../../../img/2_7.svg';

const exAnswers = {
  'A': ['B', 'C', 'D', ['C', 'D']],
  'B': ['A', 'C', 'A', 'C'],
  'C': ['A', 'B', ['A', 'E'], 'E'],
  'D': ['A', 'A', ['A', 'E'], 'E'],
  'E': [['C', 'D'], 'C', 'C', 'D']
};

const tableData = {
  'A': ['B', 'C', 'D', 'E'],
  'B': ['A', 'C', 'D', 'E'],
  'C': ['A', 'B', 'D', 'E'],
  'D': ['A', 'B', 'C', 'E'],
  'E': ['A', 'B', 'C', 'D'],
}

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {});


function Exercise4() {
  const [background, setBg] = useState(initialState);

  const checkAnswers = uAnswers => {
    const stateBgs = { ...initialState };

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
    <div id='4'>
      <div>
        <p><b>4</b> Give forwarding tables for each of the switches A-E in the following network. Destinations are
            A-E themselves. Keep all route lengths the minimum possible (one hop for an immediate neighbor, two hops for
            everything else). If a destination is an immediate neighbor, you may list its next_hop as direct or local
            for simplicity. Indicate destinations for which there is more than one choice for next_hop.</p>
        <Hint><b>Hint:</b> to "eliminate" an entry, just leave the field empty. If an entry can be elimitaned, it will me marked as a warning.</Hint>
      </div>
      <div>
        <img className='exercise_image' src={img} />
      </div>

      <Table
        tableData={tableData}
        check={checkAnswers}
        background={background}
      />
    </div>
  )
}

export default Exercise4;
