import React from 'react';
import Hint from '../../Hint';
import Exercise11Table from '../../Exercise1_11Table';


function Excercise11() {
  return (
    <div id="11">
      <div>
        <p><b>11</b> In exercise <a href='#9'>9</a>, the routes taken by packets A-D are reasonably direct, but the routes for E and F are rather circuitous.</p>
        <pre className="highlight">
          {`S1─────S4─────S10──A──E
│      │
│      │
S2─────S5─────S11──B
│      │
│      │
S3─────S6─────S12──C──D──F`}
        </pre>
        <ol style={{ listStyleType: 'lower-alpha' }}>
          <li>Assign weights to the seven links S1–S2, S2–S3, S1–S4, S2–S5, S3–S6, S4–S5 and S5–S6, as in exercise 10,
           so that destination E’s route in exercise 9 becomes the optimum (lowest total link weight) path.</li>
          <li>Assign weights to the seven links that make destination F’s route in exercise 9 optimal. (This will be a different set of weights from part (a).)</li>
        </ol>
        <Hint>
          <b>Hint:</b> you can do this by assigning a weight of 1 to all links except to one or two “bad” links; the “bad” links get a weight of 10.
          In each of (a) and (b) above, the route taken will be the route that avoids all the “bad” links. You must treat (a) entirely differently
          from (b); there is no assignment of weights that can account for both routes.
        </Hint>
        <Hint>
          For both cases, there are two links that need to be 'heavier' as to avoid them. As a nice extra, I also ask for the <em>minimum </em>
          weight they must have for them to be ignored.
         </Hint>

      </div>
      <div style={{ display: 'flex' }}><p><b>a</b> Path was </p><pre style={{ display: 'inline-block' }}>S1──S2──S3──S6──S5──S4──S10──E</pre></div>
      <div>
        <p>To make this the best route based on weights, the two links that need to be 'costly' are:</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Exercise11Table
            data={[
              { switches: ['S1', 'S4'], weight: '6' },
              { switches: ['S2', 'S5'], weight: '4' }
            ]} />
        </div>
      </div>

      <div style={{ display: 'flex' }}><p><b>b</b> Path was </p><pre style={{ display: 'inline-block' }}>S1──S4──S5──S2──S3──S6──S12──E</pre></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Exercise11Table
          data={[
            { switches: ['S1', 'S2'], weight: '4' },
            { switches: ['S5', 'S6'], weight: '4' }
          ]} />
      </div>
    </div >
  )
}

export default Excercise11;
