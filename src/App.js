
import { useEffect, useState } from 'react';
import './App.css';
import Tooltip from './component/tooltip';

function App() {

  return (
    <div className='App'>
    <Tooltip theme="dark" position="top" title="Thanks of Hovering I am A tooltip">
    <div>Hover ME !!!(top)</div>
  </Tooltip>
  <Tooltip theme="light" position="bottom" title="Thanks of Hovering I am A tooltip">
    <div>Hover ME !!!(bottom)</div>
  </Tooltip>
  <Tooltip theme="dark" position="right" title="Thanks of Hovering I am A tooltip">
    <div>Hover ME !!!(right)</div>
  </Tooltip>
  <Tooltip theme="light" position="left" title="Thanks of Hovering I am A tooltip">
    <div>Hover ME !!!(left)</div>
  </Tooltip>
  </div>
  );
}

export default App;
