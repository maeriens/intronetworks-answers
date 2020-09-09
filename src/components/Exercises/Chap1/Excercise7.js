import React, { useState } from 'react';
import Table from '../../Table';
import StaticTable from '../../StaticTable';
import Hint from '../../Hint';

const exAnswer = {
  'S1': ['S2', 'S2', 'S2'],
  'S4': ['S2', 'S2', 'S3'],
};

const tableData = {
  'S1': ['S2', 'S3', 'S4'],
  'S4': ['S1', 'S2', 'S3']
}

const S2_DATA = {
  header: 'S2',
  values: [['S1', 'S1'], ['S3', 'S3'], ['S4', 'S3']]
};
const S3_DATA = {
  header: 'S3',
  values: [['S1', 'S4'], ['S2', 'S2'], ['S3', 'S4']]
};

const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {})

function Exercise7() {
  const [showAnswer, setShowAnswer] = useState(false);

  const [background, setBg] = useState(initialState);

  const checkAnswers = (uAnswers) => {
    const stateBgs = { ...initialState }
    Object.keys(exAnswer).forEach(key => {
      stateBgs[key] = exAnswer[key].map((exAnswer, i) => uAnswers[key][i] === exAnswer ? 'ok' : 'error'
      )
    });
    setBg(stateBgs)
  }

  return (
    <div id="7">
      <div>
        <p><b>7</b> Suppose we have switches S1 through S4; the forwarding-table destinations are the switches themselves.
        The tables for S2 and S3 are as below, where the next_hop value is specified in neighbor form:
        </p>
        <div style={{ marginTop: '12px' }}>
          <div><pre style={{ display: 'inline-block' }}>S2: ⟨S1,S1⟩ ⟨S3,S3⟩ ⟨S4,S3⟩</pre></div>
          <div><pre style={{ display: 'inline-block' }}>S3: ⟨S1,S2⟩ ⟨S2,S2⟩ ⟨S4,S4⟩</pre></div>
        </div>
        <p>
          From the above we can conclude that S2 must be directly connected to both S1 and S3 as its table lists them as next_hops;
          similarly, S3 must be directly connected to S2 and S4.
        </p>
        <ol style={{ listStyleType: 'lower-alpha' }}>
          <li>
            The given tables are consistent with the network diagrammed in exercise 6.0. Are the tables also consistent with a network in
            which S1 and S4 are not directly connected? If so, give such a network; if not, explain why S1 and S4 must be connected.
          </li>
          <li> Now suppose S3’s table is changed to the following. Find a network layout consistent with these tables in which S1 and S4 are
          not directly connected. Do not add additional switches.
          </li>
        </ol>
        <div><pre style={{ display: 'inline-block' }}>S3: ⟨S1,S4⟩ ⟨S2,S2⟩ ⟨S4,S4⟩</pre></div>
        <p>
          While the table for S4 is not given, you may assume that forwarding does work correctly. However, you should not assume that
          paths are the shortest possible. Hint: It follows from the S3 table above that the path from S3 to S1 starts S3 ⟶ S4;
          how will this path continue? The next switch along the path cannot be S1, because of the hypothesis that S1 and S4 are not directly connected.
        </p>
      </div>

      <p><b>a</b></p>
      <p><button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Hide Answer A' : 'Show Answer A'}</button></p>
      {
        showAnswer && (
          <div className='text_answer_container'>
            <span>The answer is <b>YES</b>. This is in fact the same table used in exercise <b>6b</b>, where <b>S1⟷S4 traffic does not exis.</b></span>
          </div>
        )
      }
      <p><b>b</b></p>
      <Hint><b>Note:</b> Tables for Switches 2 and 3 based on the data are given as the last two tables</Hint>

      <div className='flex'>
        <Table
          tableData={tableData}
          check={checkAnswers}
          background={background}
        />
        <StaticTable {...S2_DATA} />
        <StaticTable {...S3_DATA} /></div>

    </div>
  )
}

export default Exercise7;
