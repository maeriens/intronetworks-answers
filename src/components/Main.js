import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Chapter1 from './Exercises/Chap1/Chapter';
import Chapter2 from './Exercises/Chap2/Chapter';
import Hint from './Hint';
import Welcome from './Welcome';

const Main = () =>
  <section className='main'>
    <Switch>
      <Route exact path='/'>
        <Welcome />
      </Route>
      <Route path='/chapter1'>
        <Chapter1 />
      </Route>

      <Route path='/chapter2'>
        <Chapter2 />
      </Route>

    </Switch>
  </section>


export default Main;
