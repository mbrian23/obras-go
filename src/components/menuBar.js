import React, { Component } from 'react'
import logo from '../assets/logo.png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

export class menuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: localStorage.getItem('currentUser')
        };
      }
    render() {
        return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <LinkContainer to="/">
                <Nav.Link>
                    <img
                    src={logo}
                    width="50wc"
                    height="54wc"
                    className="d-inline-block align-top"
                    alt="ObrasGo logo"
                    /> 
                </Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={this.toggleNavbar}
            />
            <Navbar.Collapse id="basic-navbar-nav" > 
                <Nav className="mr-auto">
                    <LinkContainer to="/map">
                        <Nav.Link> 
                            Mapa
                        </Nav.Link>
                    </LinkContainer>
                    {this.state.username&&<NavDropdown
                        className="justify-content-end"
                        title={this.state.username}
                        id="basic-nav-dropdown"
                    >
                        <LinkContainer to="/settings">
                            <Nav.Link> Ajustes </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link> Mi perfil </Nav.Link>
                        </LinkContainer>
                        <Button variant="light" block>
                            <LinkContainer to="/login">
                            <Nav.Link> Cerrar sesión </Nav.Link>
                            </LinkContainer>
                        </Button>
                    </NavDropdown>}
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        )
    }
}

export default menuBar
