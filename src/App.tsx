import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDownTimer from './component/CountDownTimer';

function App() {
  return (
    <div className="App">
      <CountDownTimer expireDate={new Date()} onTimerComplete={()=> console.log('33333') } />
    </div>
  );
}

export default App;
