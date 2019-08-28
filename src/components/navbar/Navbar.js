import React from "react";
import NavStyle from './NavStyle.css';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import {
  Home,
  Person,
  Map,
  Assignment,
  Info,
  AccountBox,
  Settings,
  ExitToApp
} from "@material-ui/icons";
// https://material-ui.com/components/material-icons icon search from here
import LoginModal from "../login/LoginModal";
import { Consumer } from "../context/Authcontext";

export const NavBar = () => (
    <Consumer>
        {({ logOut }) => (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><Home />Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/plan"><Assignment />Plan</Link></Nav.Link>
                        <Nav.Link>
                            <Link to="/map"><Map />Map</Link></Nav.Link>
                        <Nav.Link><Info />About</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className="justify-content-end"><span onClick={logOut}><ExitToApp  /> Log out</span></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>)}
    </Consumer>
)



/*
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Map, Assignment, Info, AccountBox, Settings, ExitToApp } from '@material-ui/icons'

function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Home  <Home />
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Plans <Assignment />
                    </TypoGraphy>
                </ListItemText>



                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Map <Map />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Settings <Settings />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                    About <Info />
                </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        Log out <ExitToApp />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    )
}


export default NavBar;*/
