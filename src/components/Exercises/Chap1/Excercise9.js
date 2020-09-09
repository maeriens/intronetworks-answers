import React, { useState } from 'react';
import Table from '../../Table';
import StaticTable from '../../StaticTable';
import Hint from '../../Hint';
import SingleRow from '../../SingleRow';

const S1_DATA = {
  header: 'S1',
  values: [['A', 'S4'], ['B', 'S2'], ['C', 'S4'], ['D', 'S2'], ['E', 'S2'], ['F', 'S4']]
};

const S2_DATA = {
  header: 'S2',
  values: [['A', 'S5'], ['B', 'S5'], ['C', ''], ['D', 'S5'], ['E', 'S3'], ['F', 'S3']]
};

const S3_DATA = {
  header: 'S3',
  values: [['A', ''], ['B', 'S6'], ['C', 'S2'], ['D', ''], ['E', 'S6'], ['F', 'S6']]
};

const S4_DATA = {
  header: 'S4',
  values: [['A', 'S10'], ['B', ''], ['C', 'S15'], ['D', ''], ['E', 'S10'], ['F', 'S5']]
};

const S5_DATA = {
  header: 'S5',
  values: [['A', 'S6'], ['B', 'S11'], ['C', 'S6'], ['D', 'S6'], ['E', 'S4'], ['F', 'S2']]
};

const S6_DATA = {
  header: 'S6',
  values: [['A', 'S3'], ['B', 'S12'], ['C', 'S12'], ['D', 'S12'], ['E', 'S5'], ['F', 'S12']]
};

const singleRows = [
  { destination: 'A', correctAnswers: ['S4', 'S10'] },
  { destination: 'B', correctAnswers: ['S2', 'S5', 'S11'] },
  { destination: 'C', correctAnswers: ['S4', 'S5', 'S6', 'S12'] },
  { destination: 'D', correctAnswers: ['S2', 'S5', 'S6', 'S12'] },
  { destination: 'E', correctAnswers: ['S2', 'S3', 'S6', 'S5', 'S4', 'S10'] },
  { destination: 'F', correctAnswers: ['S4', 'S5', 'S2', 'S3', 'S6', 'S12'] },
]

const getHintText = (ans) => `The total of hops is ${ans.length}`;
const getAnswerText = (ans) => `The correct hops are ${ans.join(', ')}`;

function Exercise9() {

  return (
    <div id="9">
      <div>
        <p><b>9</b> Consider the following arrangement of switches:</p>
        <pre className="highlight">
          {`S1─────S4─────S10──A──E
│      │
│      │
S2─────S5─────S11──B
│      │
│      │
S3─────S6─────S12──C──D──F`}
        </pre>
        <p>Suppose S1-S6 have the forwarding tables below. For each of the following destinations, suppose a packet is sent to the destination from S1.</p>

      </div>
      <p>Forwarding Tables:</p>
      <div style={{ display: 'flex' }}>
        <StaticTable {...S1_DATA} />
        <StaticTable {...S2_DATA} />
        <StaticTable {...S3_DATA} />
        <StaticTable {...S4_DATA} />
        <StaticTable {...S5_DATA} />
        <StaticTable {...S6_DATA} />
      </div>
      <p>Give the switches the packet will pass through, including the initial switch S1, up until the final switch S10-S12.</p>
      <Hint><b>Note:</b> Bear in mind that S10, S11 and S12 will forward directly to the destinations.
        <br />
        In some cases there are more slots than hops, for those leave the rest blank. The first hop, S1, is already given.
        <br />
        Clicking <b>HINT</b> will give the total of steps between S1 and the destination; answer will give the final answer.
       </Hint>
      <div>
        {singleRows.map(({ destination, correctAnswers }) => {
          const ans = getAnswerText(correctAnswers);
          const hint = getHintText(correctAnswers)
          return <SingleRow
            key={destination}
            destination={destination}
            correctAnswers={correctAnswers}
            answerContent={ans}
            hintContent={hint}
            start='S1'
            inputsLength={6}
          />
        })}
      </div>
    </div>
  )
}

export default Exercise9;
