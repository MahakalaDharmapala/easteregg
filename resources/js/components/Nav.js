import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand as={Link} to="/cinestres/public/">Esteregg</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link as={Link} to="/easteregg-1/public/LoginForm">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/easteregg-1/public/RegisterForm">Registrarse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigation;