import React, { Component } from 'react'
import { Consumer, Provider } from "./context/Authcontext";

export default class Testsite extends Component {
    state = {loggedIn: false}
    
    render() {
        
        return (
          <div>
            <Consumer>
              {({ isLoggedIn }) =>
                isLoggedIn ? <p>Joo</p> : <p>Ei</p>
              }
            </Consumer>

            <Consumer>
              {({ logIn, logOut, isLoggedIn }) =>
                isLoggedIn ? (
                  <button onClick={logOut}>Btn</button>
                ) : (
                  <button onClick={logIn}>Btn</button>
                )
              }
            </Consumer>
          </div>
        );
    }
}
