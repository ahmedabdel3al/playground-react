import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDown from './component/CountDown';

function App() {
  return (
    <div className="App">
      <CountDown expireDate={new Date()} />
    </div>
  );
}

export default App;
