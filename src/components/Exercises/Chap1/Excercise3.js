import React, { useState } from 'react';
import Hint from '../../Hint';

function Exercise3() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div id='3'>
      <div>
        <p><b>3</b> In the network of the previous exercise, suppose that destinations directly connected to an immediate neighbor
        are always reached via that neighbor; eg S1’s forwarding table will always include ⟨B,S2⟩ and ⟨D,S4⟩. This leaves only routes
         to the diagonally opposite nodes undetermined (eg S1 to C). Show that, no matter which next_hop entries are chosen for the
          diagonally opposite destinations, no routing loops can ever be formed. (Hint: the number of links to any diagonally
          opposite switch is always 2.)</p>
        <Hint><b>Note:</b> Here, notation <b>⟨C,S3⟩</b> means <b>⟨DESTINATION, LAST_HOP_TO_REACH_IT⟩</b></Hint>
      </div>

      <div>
        <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
      </div>
      {
        showAnswer && (
          <div className='text_answer_container'>
            <span>This is because once the first hop is made, the following switch already has
                a table entry to <b>S3</b>, which directy connects to the destination.</span>
            <span>
              Using as example S1 to C: If the next_hop is <b>S2</b>, that has the entry <b>⟨C,S3⟩</b>, and knows that it can reach <b>C via S3</b>
              <br />
          If instead it chooses to go through <b>S4</b>, that has the same entry <b>⟨C,S3⟩</b>, thus reaching <b>C via S3 too</b></span>
          </div>
        )
      }
    </div >
  )
}

export default Exercise3;
