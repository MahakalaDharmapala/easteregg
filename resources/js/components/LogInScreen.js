import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Form, Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//1305
import { Navigate, useNavigate } from "react-router-dom";

const LogInScreen = () => {
    const [formValue, setformValue] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    //ESTO ENVIA LOS DATOS AL CATALOGSCREEN
    function toCatalogScreen(tok) {
        axios
            .get(
                "https://localhost/easteregg-1/public/user/userInfo/'.$email.'",
                {
                    params: {
                        email: formValue.email,
                    },
                }
            )
            .then(function (response) {
                console.log(response.data);
                navigate("/easteregg-1/public/", {
                    state: {
                        u_token: tok,
                        u_name: response.data.name,
                        u_id: response.data.id,
                        u_role: response.data.role,
                    },
                });
            })
            .catch(function (error) {
                console.log(error);
                alert("Hubo un error en los datos del usuario");
            });
    }

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        console.log(formValue);
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        console.log(formData);
        axios
            .post(
                "https://localhost/easteregg-1/public/api/login",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("response");
                console.log(formData);
                console.log(response);
                //AQUI, MANDAR A LLAMAR UN METODO PARA QUE REGRESE LOS VALORES DEL NOMBRE
                //Y DEL ROL DEL USUARIO
                //ABAJO USAR EL USE NAVIGATE PARA ENVIAR EL TOKEN, EL ROL Y EL NOMBRE,
                //INTENTA PRIMERO SOLO CON EL ROL Y EL TOKEN, AUNQUE SI RETORNAS EL OBJETO
                //COMPLETO, DEBER??AS PODER ACCEDER AL NOMBRE Y A TODOS LOS DATOS DEL USUARIO.
                //LUEGO MANDALO A LA P??GINA PRINCIPAL DE CATALOGSCREEN
                toCatalogScreen(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Hubo un error en Login");
            });
    };

    return (
        //A??ADIDO
        <div className="pt-5 ">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <div style={{ textAlign: "center" }}>
                    <img
                        src={"./images/logoEaster.png"}
                        alt="logo"
                        width={300}
                        height={210}
                    />
                    <h3 className="header">Welcome again!</h3>
                </div>

                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formValue.email}
                                    onChange={onChange}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={formValue.password}
                                    onChange={onChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            ></Form.Group>
                            <div className="d-grid gap-2">
                                <Button
                                    variant="outline-dark"
                                    size="lg"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogInScreen;
