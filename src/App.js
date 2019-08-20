import React from 'react';
import logo from './logo.png';
import './App.css';
import Plan from './components/NewPlan'
import PreviousPlan from './components/PreviousPlan'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
         Final count... project frontend!
        </p>

      </header>
      <Plan/>
      <PreviousPlan/>
    </div>
  );
}

export default App;
