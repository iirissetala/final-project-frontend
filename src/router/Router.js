import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {NavBar} from '../components/navbar/Navbar'
import Homer from '../components/home/Home';
import Map from '../components/map/Map';
import OutlinedTextFields from "../components/plans/NewPlan";

class Router1 extends Component{
    render() {
        return(
            <Router>
                <NavBar/>
                <>
                    <Switch>
                        <Route path="/" exact component={Homer}/>
                        <Route path="/plan" exact component={OutlinedTextFields}/>
                        <Route path="/" exact component={Homer}/>
                        <Route path="/maps" exact component={Map}/>

                    </Switch>
                    </>
            </Router>
        )
    }
}
export default Router1