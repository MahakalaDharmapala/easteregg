import { React, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
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

export default function NavigationBarAdmin(props) {
    const navigate = useNavigate();

    function toEditGameFunction(token) {

        navigate("/easteregg-1/public/EditGame", {

            state: {

                u_token: props.u_token.token,

            },

        });

    }
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
                    <Navbar.Brand as={Link} to="/easteregg-1/public">
                        <img
                            alt="EasterEggLogo"
                            src={"./images/logoEaster.png"}
                            height={60}
                            className="d-inline-block align-top"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Brand
                        as={Link}
                        to="/easteregg-1/public"
                        style={{ color: "black", fontSize: 40 }}
                    >
                        EasterEgg
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {props.u_name === undefined ? (
                            <p></p>
                        ) : (
                            <Nav.Item
                                style={{
                                    fontSize: 30,
                                    paddingRight: 10,
                                    color: "black",
                                }}
                            >
                                Bienvenido de nuevo: {props.u_name}
                            </Nav.Item>
                        )}

                        {/* <Nav.Link
                            as={Link}
                            to="/easteregg-1/public/RegisterForm"
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
                            as={Link}
                            to="/easteregg-1/public/LogInScreen"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Iniciar sesión
                        </Nav.Link> */}

                        <Nav.Link
                            onClick={() => {

                                

                                toEditGameFunction();

                            }}
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
                            as={Link}
                            to="/easteregg-1/public/SalesTable"
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
                        as={Link}
                        to="/easteregg-1/public/Users"
                            style={{
                                fontSize: 30,
                                paddingRight: 10,
                                color: "black",
                            }}
                        >
                            {" "}
                            Users
                        </Nav.Link>
                        <Nav.Link

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
