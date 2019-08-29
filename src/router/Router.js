import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar";
import Homer from "../components/home/Home";
import Map2 from "../components/map/MapClass";
import Plans from "../components/plans/Plan";
import Testsite from "../components/Testsite";
import SinglePlan from '../components/plans/singleplan/SinglePlan'
import Maptest from '../components/map/Maptest'
import Content from "../components/content/Content";
import EditPreviousPlan from "../components/plans/EditPreviousPlan";
import AddReferencePictures from "../components/plans/AddReferencePictures";

class Router1 extends Component {
  render() {
    return (
      <Router>
        
            <NavBar />
            <>
              <Switch>
                <Route path="/" exact component={Homer} />
                <Route path="/plan" exact component={Plans} />
            <Route path="/map" exact component={Maptest} />
            <Route exact path="/plans/:id" component={SinglePlan} />
            <Route path="/feed" component={Content}/>
            <Route exact path="/plans/:id/edit" component={EditPreviousPlan}/>
            <Route exact path="/plans/:id/addpictures" component={AddReferencePictures}/>
          </Switch>
            </>
      </Router>
    );
  }
}
export default Router1;
