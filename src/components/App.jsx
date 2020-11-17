import React from 'react';
import { sum } from './func';
import catImg from '../assets/cat.jpg';

import cls from './App.module.css';

const App = () => {
  console.log(cls);
  return (
    <div>
      <h2>React app!!!!: {sum(2, 3)}</h2>
      <img src={catImg}></img>
    </div>
  );
};

export default App;
