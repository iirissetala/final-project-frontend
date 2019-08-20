import React from 'react';
import logo from './logo.png';
import './App.css';
import NewPlan from './components/plans/NewPlan'
import Plans from './components/plans/Plan'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
         Final count... project frontend!
        </p>

      </header>

      <NewPlan/>
      <Plans/>

    </div>
  );
}

export default App;
