import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
