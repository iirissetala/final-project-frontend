import React from 'react';
import logo from './logo.png';
import './App.css';
import NewPlan from './components/plans/NewPlan'
import Plans from './components/plans/Plan'
import Plan from './components/plans/NewPlan'
import PreviousPlan from './components/plans/PreviousPlan'
import {NavBar} from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <header>
          <NavBar />
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
