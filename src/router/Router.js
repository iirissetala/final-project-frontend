import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar";
import Homer from "../components/home/Home";
import Map from "../components/map/Map";
import Plans from "../components/plans/Plan";
import LoginModal from "../components/login/LoginModal";
import { ModalProvider } from "../components/login/ModalContext";
import { Provider } from "../components/context/Authcontext";
import Testsite from "../components/Testsite";


class Router1 extends Component {
  render() {
    return (
      <Router>
        
            <NavBar />
            <>
              <Switch>
                <Route path="/" exact component={Homer} />
                <Route path="/plan" exact component={Plans} />
                <Route path="/" exact component={Homer} />
                <Route path="/map" exact component={Map} />

                <Route exact path="/test" component={Testsite} />
              </Switch>
            </>
          
      </Router>
    );
  }
}
export default Router1;
