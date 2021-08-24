import React, { useState } from 'react';
import Table from '../../Table';

const url = 'http://intronetworks.cs.luc.edu/current2/html/ethernet1.html#exponential-backoff-algorithm';

function Exercise1() {

  return (
    <div id='1'>
      <div>
        <p><b>1</b> Simulate the contention period of five Ethernet stations that all attempt to transmit at T=0
        (presumably when some sixth station has finished transmitting), in the style of the diagram in
        <a target='_blank' href={url}>2.1.6 Exponential Backoff Algorithm.</a> Assume that time is measured in slot times,
        and that exactly one slot time is needed to detect a collision (so that if two stations transmit at T=1 and collide,
        and one of them chooses a backoff time k=0, then that station will transmit again at T=2).
        Use coin flips or some other source of randomness.</p>
      </div>

    </div>
  )
}

export default Exercise1
