import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "../components/navbar/Navbar";
import Homer from "../components/home/Home";
import Map from "../components/map/Map";
import OutlinedTextFields from "../components/plans/NewPlan";
import LoginModal from "../components/login/LoginModal";
import { NotLoggedNavbar } from '../components/navbar/NotLoggedNavbar'
import Testsite from "../components/Testsite";


class NotLoggedRouter extends Component {
    render() {
        return (
            <Router>

                
                <NotLoggedNavbar />
                <>
                    <Switch>
                        <Route path="/"  component={Homer} />
                        
                        <Route exact path="/test" component={Testsite} />
                    </Switch>
                </>

            </Router>
        );
    }
}
export default NotLoggedRouter;