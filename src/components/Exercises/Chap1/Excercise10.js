import React, { useState } from 'react';
import Table from '../../Table';
import Hint from '../../Hint';
import SingleRow from '../../SingleRow';

const exerciseRows = [
  { start: 'A', destination: 'F', correctAnswers: ['S1', 'S2', 'S5', 'S6'], weight: 4 },
  { start: 'A', destination: 'D', correctAnswers: ['S1', 'S2', 'S5', 'S4'], weight: 4 },
  { start: 'A', destination: 'C', correctAnswers: ['S1', 'S2', 'S5', 'S6', 'S3'], weight: 8 },
]

const getHintContent = (weight) => <span>Lowest weight is <b>{weight}</b></span>;
const getAnswerText = ({ correctAnswers, weight }) => `The correct hops are ${correctAnswers.join(', ')}, with a weight of ${weight}`;

const exAnswers = {
  'S2': ['S1', 'B', 'S5', 'S5', 'S5', 'S5'],
};

const tableData = { 'S2': ['A', 'B', 'C', 'D', 'E', 'F'] };
const initialState = Object.keys(tableData).reduce((acc, key) => {
  return { ...acc, [key]: Array.from(Array(tableData[key].length), () => '') }
}, {});

function Exercise10() {
  const [background, setBg] = useState(initialState);

  const checkAnswers = uAnswers => {
    const stateBgs = { ...initialState };

    Object.keys(exAnswers).forEach(key => {
      stateBgs[key] = uAnswers[key].map((uAnswer, i) => uAnswer === exAnswers[key][i] ? 'ok' : 'error')
    });

    setBg(stateBgs)
  }

  return (
    <div id="10">
      <div>
        <p><b>10</b> Suppose a set of nodes A-F and switches S1-S6 are connected as shown.</p>
        <pre className="highlight">
          {`A────S1───5───S4────D
     │         │
     1         1
     │         │
B────S2───2───S5────E
     │         │
     8         1
     │         │
C────S3───4───S6────F`}
        </pre>
        <p>
          The links between switches are labeled with weights, which are used by some routing applications. The weights represent the cost
          of using that link. You are to find the path through S1-S6 with lowest total cost (that is, with smallest sum of weights), for each
          of the following transmissions. For example, the lowest-cost path from A to E is A–S1–S2–S5–E, for a total cost of 1+2=3; the
          alternative path A–S1–S4–S5–E has total cost 5+1=6.
        </p>
        <ol style={{ listStyleType: 'lower-alpha' }}>
          <li>From A to F</li>
          <li>From A to D</li>
          <li>From A to C</li>
          <li>Give the complete forwarding table for S2, where all routes are selected for lowest total cost.</li>
        </ol>
        <Hint><b>Hint:</b>
          There could be less hops than inputs available, again left for the user to decide. Hint will show the <b>lowest weight</b>,
          and answer will show the <b>hops</b>
        </Hint>
      </div>
      <p><b>a</b></p>
      <SingleRow
        {...exerciseRows[0]} inputsLength={5} hintContent={getHintContent(exerciseRows[0].weight)}
        answerContent={getAnswerText(exerciseRows[0])}
      />
      <p><b>b</b></p>
      <SingleRow
        {...exerciseRows[1]} inputsLength={5} hintContent={getHintContent(exerciseRows[1].weight)}
        answerContent={getAnswerText(exerciseRows[1])}
      />
      <p><b>c</b></p>
      <SingleRow
        {...exerciseRows[2]} inputsLength={5} hintContent={getHintContent(exerciseRows[2].weight)}
        answerContent={getAnswerText(exerciseRows[2])}
      />

      <p><b>d</b></p>
      <Hint><b>Note:</b> If a destination is a letter, enter that letter</Hint>
      <Table
        tableData={tableData}
        check={checkAnswers}
        background={background}
      />
    </div>
  )
}

export default Exercise10;
