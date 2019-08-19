import React from 'react';
import logo from './logo.png';
import './App.css';
import Plan from './components/NewPlan'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Final count... project frontend!
        </p>

      </header>
      <Plan/>
    </div>
  );
}

export default App;
