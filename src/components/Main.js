import React, { useState } from 'react';
import Exercise1 from './Exercises/Chap1/Excercise1';
import Exercise2 from './Exercises/Chap1/Excercise2';
import Exercise3 from './Exercises/Chap1/Excercise3';
import Exercise4 from './Exercises/Chap1/Excercise4';
import Exercise5 from './Exercises/Chap1/Excercise5';
import Exercise6 from './Exercises/Chap1/Excercise6';
import Exercise7 from './Exercises/Chap1/Excercise7';
import Exercise8 from './Exercises/Chap1/Excercise8';
import Exercise9 from './Exercises/Chap1/Excercise9';
import Exercise10 from './Exercises/Chap1/Excercise10';
import Exercise11 from './Exercises/Chap1/Excercise11';
import Exercise12 from './Exercises/Chap1/Excercise12';
import Hint from './Hint';

const Main = () =>
  <section className='main'>
    <Hint>
      This is an attempt by me of solving <b>An Introduction to Computer Networks</b>, by <b>Peter L. Dordal</b>, and making a site to check the answers.
      The book can be found by free <a href='http://intronetworks.cs.luc.edu/'>Here!</a>
    </Hint>
    <div>
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />
      <Exercise6 />
      <Exercise7 />
      <Exercise8 />
      <Exercise9 />
      <Exercise10 />
      <Exercise11 />
      <Exercise12 />
    </div>
  </section>


export default Main;
