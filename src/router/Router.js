import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar";
import Homer from "../components/home/Home";
import Map from "../components/map/Map";
import Map2 from "../components/map/MapClass";
import OutlinedTextFields from "../components/plans/NewPlan";
import Plans from "../components/plans/Plan";
import LoginModal from "../components/login/LoginModal";
import { ModalProvider } from "../components/login/ModalContext";
import { Provider } from "../components/context/Authcontext";
import Testsite from "../components/Testsite";
import SinglePlan from '../components/plans/singleplan/SinglePlan'
import Maptest from '../components/map/Maptest'
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
                <Route path="/map" exact component={Map2} />
                <Route path="/plans/:id" component={SinglePlan}/>
                <Route exact path="/test" component={Testsite} />
            <Route path="/map2" exact component={Maptest} />
          </Switch>
            </>
          
      </Router>
    );
  }
}
export default Router1;
