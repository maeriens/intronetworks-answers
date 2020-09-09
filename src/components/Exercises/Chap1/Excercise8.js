import React, { useState } from 'react';
import Hint from '../../Hint';

function Exercise8() {
  const [showAnswerA, setShowAnswerA] = useState(false);
  const [showAnswerB, setShowAnswerB] = useState(false);

  return (
    <div id="8">
      <div>
        <p><b>8</b></p>

        <ol style={{ listStyleType: 'lower-alpha' }}>
          <li>Suppose a network is as follows, with the only path from A to C passing through B:
             <pre style={{ display: 'inline-block' }}>... ──A────B────C── ...</pre>
            <br />
             Explain why a single routing loop cannot include both A and C. Hint: if the loop involves destination D, how does B forward to D?
          </li>
          <br />
          <li>
            Suppose a routing loop follows the path <pre style={{ display: 'inline-block' }}>A──S1──S2── … ──Sn──A</pre>, where none of the Si are equal to A.
            Show that all the Si must be distinct. (A corollary of this is that any routing loop created by datagram-forwarding
            either involves forwarding back and forth between a pair of adjacent switches, or else involves an actual graph cycle
            in the network topology; linear loops of length greater than 1 are impossible.)
          </li>
        </ol>
      </div>
      <Hint><b>Note:</b> Si refers to Switch Number (subindex i)</Hint>

      <p><b>a</b></p>
      <p><button onClick={() => setShowAnswerA(!showAnswerA)}>{showAnswerA ? 'Hide Answer A' : 'Show Answer A'}</button></p>
      {
        showAnswerA && (
          <div className='text_answer_container'>
            <span>
            Imagine having an extra destination, D, and information is coming through A to D:
            <pre>... ──A────B────C────D ...</pre>
            If any link between A and D break, the packet is returned to where it came from. But as it is returned, that destination has in it's table to forward
            it again to the same place that it had just returned it, thus creating a 1 link loop.
            For this case, imagine that link C-D breaks. A packet from A to D follows knows that it has to go through B. B knows it has to go through C. But C 
            cannot forward it so returns it to B, who in turns sees that the destination is D, sending it again to C. Thus a loop in B-C is created.
            </span>
          </div>
        )
      }
      <p><b>b</b></p>
      <p><button onClick={() => setShowAnswerB(!showAnswerB)}>{showAnswerB ? 'Hide Answer B' : 'Show Answer B'}</button></p>
      {
        showAnswerB && (
          <div className='text_answer_container'>
            <span>
              Similar to previous answer, when having a loop that returns to the original emitting point, they all need to be unique points,
              as the loops end up being of only 1 of length. Try manually drawing closed loops (a triangle, a square, and so on) with their tables
              to see that the only way to loop <em>and return to A</em> is that all the other hops are unique.
            </span>
          </div>
        )
      }

    </div>
  )
}

export default Exercise8;
