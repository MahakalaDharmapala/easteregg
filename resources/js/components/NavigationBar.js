import { React, useState } from "react";
import ReactDOM from "react-dom";
import {
    Button,
    Form,
    Container,
    Row,
    Col,
    Image,
    Navbar,
    Nav,
    NavDropdown,
    ThemeProvider,
    CardGroup,
    Card,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
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
                    <Navbar.Brand href="#Home">
                        <img
                            alt="EasterEggLogo"
                            src={"./images/logoEaster.png"}
                            height={60}
                            className="d-inline-block align-top"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Brand
                        style={{ color: "black", fontSize: 40 }}
                        href="#home"
                    >
                        EasterEgg
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
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
