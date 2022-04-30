import { React, useState } from "react";
import { Link } from "react-router-dom"
import ReactDOM from "react-dom";
import {
    Container,
    Image,
    Navbar,
    Nav,
    NavDropdown,
    ThemeProvider,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBarAdmin() {
    return (
        <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        >
            <Container fluid>
                <Navbar
                    expand="lg"
                    sticky="top"
                    style={{
                        backgroundColor: "#60c46e",
                        borderRadius: 10,
                        fontFamily: ["Teko", "sans-serif"],
                        padding: 8,
                    }}
                >
                    <Navbar.Brand as={Link} to="/easteregg-1/public/">
                        <img
                            alt="EasterEggLogo"
                            src={"./images/logoEaster.png"}
                            height={60}
                            className="d-inline-block align-top"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Brand
                    as={Link} to="/easteregg-1/public/"
                        style={{ color: "black", fontSize: 40 }}
                        
                    >
                        EasterEgg
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link
                            as={Link} to="/easteregg-1/public/RegisterForm"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Registrarse
                        </Nav.Link>
                        <Nav.Link
                            as={Link} to="/easteregg-1/public/LogInScreen"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Iniciar sesión
                        </Nav.Link>
                        <Nav.Link
                            as={Link} to="/easteregg-1/public/EditGame"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Games
                        </Nav.Link>
                        <Nav.Link
                           as={Link} to="/easteregg-1/public/SalesTable"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Sales
                        </Nav.Link>
                        <Nav.Link
                            href="#Users"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Users
                        </Nav.Link>
                        <NavDropdown
                            title="Platforms"
                            id="collasible-nav-dropdown"
                            style={{ color: "black", fontSize: 30 }}
                        >
                            <NavDropdown.Item
                                href="#PlayStation"
                                style={{ fontSize: 30 }}
                            >
                                PlayStation
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#Xbox"
                                style={{ fontSize: 30 }}
                            >
                                Xbox
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#PC"
                                style={{ fontSize: 30 }}
                            >
                                PC
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="#Logout"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            LogOut
                        </Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </ThemeProvider>
    );
}
