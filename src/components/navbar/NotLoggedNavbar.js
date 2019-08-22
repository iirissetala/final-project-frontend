import React from "react";
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
import LoginModal from "../login/LoginModal";
import { Consumer } from "../context/Authcontext";
import Signup from "../signup/Signup";

export const NotLoggedNavbar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><Home />Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                
                <Nav.Link><Info />About</Nav.Link>

            </Nav>
            <Nav>
                <Nav.Link className="justify-content-end"><LoginModal/><Signup/></Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
)