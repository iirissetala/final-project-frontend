import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Router extends Component{
    render() {
        return(
            <Router>
                <NavigationBar/>

            </Router>
        )
    }
}