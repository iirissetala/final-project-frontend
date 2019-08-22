import React from 'react';
import './App.css';
import NewPlan from './components/plans/NewPlan'
import Plans from './components/plans/Plan'
import {NavBar} from './components/navbar/Navbar'
import Router1 from "./router/Router";
import { ModalProvider } from "./components/login/ModalContext";
import { Provider, Consumer } from "./components/context/Authcontext";
import NotLoggedRouter from './router/NotLoggedRouter';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Provider>
          <Consumer>
            {({ isLoggedIn }) => (isLoggedIn ? <Router1 /> : <NotLoggedRouter/>)}
          </Consumer>
    
        </Provider>
      </ModalProvider>
    </div>
  );
}

export default App;
