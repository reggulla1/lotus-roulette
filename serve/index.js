import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roulette from './Roulette';

import App from './App';
import registerServiceWorker from './registerServiceWorker';



const handleOnComplete = (value) => {
  console.log(value);
};

const options = [
  "test1",
  "test2",
  "test3",
    "test4",
    "test5",
  "test6",
  "test7",
  "test8"

];

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Roulette options={options} lockTarget={2} baseSize={300} onComplete={handleOnComplete}/>, document.getElementById('root1'));
registerServiceWorker();
