import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homer from "../components/home/Home";
import { NotLoggedNavbar } from '../components/navbar/NotLoggedNavbar'
import About from "../components/home/About";


class NotLoggedRouter extends Component {
    render() {
        return (
            <Router>

                
                <NotLoggedNavbar />
                <>
                    <Switch>
                        <Route path="/"  component={Homer} />
                        <Route path="/about"  component={About} />

                    </Switch>
                </>

            </Router>
        );
    }
}
export default NotLoggedRouter;