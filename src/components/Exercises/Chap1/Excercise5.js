import React, { useState } from 'react';
import Table from '../../Table';
import Hint from '../../Hint';

const exAnswers = {
  'S1': ['A', '', '', '', '', 'S3'],
  'S2': ['', 'B', '', '', '', 'S3'],
  'S3': ['S1', 'S2', 'C', '', '', 'S4'],
  'S4': ['S3', 'S3', 'S3', 'D', 'E', 'S5']
};


const tableData = {
  'S1': ['A', 'B', 'C', 'D', 'E', 'default'],
  'S2': ['A', 'B', 'C', 'D', 'E', 'default'],
  'S3': ['A', 'B', 'C', 'D', 'E', 'default'],
  'S4': ['A', 'B', 'C', 'D', 'E', 'default']
}

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {})


function Exercise5() {
  const [background, setBg] = useState(initialState);

  const checkAnswers = uAnswers => {
    const stateBgs = { ...initialState }

    Object.keys(exAnswers).forEach(key => {
      stateBgs[key] = exAnswers[key].map((exAnswer, i) => {
        if (i !== 5 && exAnswer === '' && uAnswers[key][i] === exAnswers[key][5]) {
          return 'warn'
        }
        return uAnswers[key][i] === exAnswer ? 'ok' : 'error'
      })
    });

    setBg(stateBgs)
  }


  return (
    <div id="5">
      <div>
        <p><b>5</b> Consider the following arrangement of switches and destinations. Give forwarding tables (in neighbor form)
      for S1-S4 that include default forwarding entries; the default entries should point toward S5. The default entries
      will thus automatically forward to the “possible other destinations” shown below right.</p>
        <p>Eliminate all table entries that are implied by the default entry (that is, if the default entry is to S3, eliminate
      all other entries for which the next hop is S3).</p>
      <Hint><b>Hint:</b> to "eliminate" an entry, just leave the field empty. If an entry can be elimitaned, it will me marked as a warning.</Hint>
      </div>
      <pre className="highlight">
        {`A───S1
    │         D
    │         │
C───S3────────S4─────────S5────... possible other destinations
    │         │
    │         E
B───S2`}
      </pre>

      <Table
        tableData={tableData}
        check={checkAnswers}
        background={background}
      />
    </div>
  )
}

export default Exercise5;
