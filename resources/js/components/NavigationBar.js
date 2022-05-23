import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Link,useNavigate } from "react-router-dom";
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



export default function NavigationBar(props) {
    const navigate = useNavigate();
    function toLogOut(){
        axios.get(
            "https://localhost/easteregg-1/public/api/logout",
            {
                params:{
                    u_token: props.u_token.token,
                }
            }
        )
        .then(function (response) {
            
            alert("Se ha cerrado la sesion");
            navigate("/easteregg-1/public/");
            
        })
        .catch(function (error) {
            console.log(error);
            alert("Hubo un error al salir");
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
                    <Navbar.Brand as={Link} to="/easteregg-1/public/">
                        <img
                            alt="EasterEggLogo"
                            src={"./images/logoEaster.png"}
                            height={60}
                            className="d-inline-block align-top"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Brand
                        as={Link}
                        to="/easteregg-1/public/"
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

                        {props.u_name != undefined ? (
                            <p></p>
                        ) : (
                            <Nav.Link
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
                        )}

                        {props.u_name != undefined ? (
                            <p></p>
                        ) : (
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
                            </Nav.Link>
                        )}

                        {props.u_name === undefined ? (
                            <p></p>
                        ) : (
                            <Nav.Link
                            onClick={() => {                                

                                toLogOut();
                                
                                     }}
                                style={{
                                    fontSize: 30,
                                    paddingRight: 10,
                                    color: "black",
                                }}
                            >
                                {" "}
                                LogOut
                            </Nav.Link>
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </ThemeProvider>
    );
}