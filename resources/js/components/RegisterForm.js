import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [showErr, setShowErr] = useState(false);
    const [formValue, setformValue] = React.useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const onChange = (e) => {
        e.persist();
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("name", formValue.name);
        formData.append("lastName", formValue.lastName);
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);

        axios
            .post(
                "https://localhost/easteregg-1/public/api/register",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("response: ");
                console.log(response);
                navigate("/easteregg-1/public/LogInScreen");
            })
            .catch((error) => {
                console.log(error);
                setShowErr(true);
            });
    };

    return (
        <div>
            <Alert
                show={showErr}
                variant="danger"
                onClose={() => setShowErr(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>Datos incorrectos.</Alert.Heading>
                    <p>Vuelva a intentarlo.</p>
                </center>
            </Alert>

            <Container>
                <h1 className="mt-5">Registrarse</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre de usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de usuario"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasiclastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="apellido"
                            name="lastName"
                            value={formValue.lastName}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                        <Form.Text className="text-muted">
                            Tu email nunca se compartirá con nadie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={formValue.password}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default RegisterForm;
if (document.getElementById("")) {
    ReactDOM.render(<RegisterForm />, document.getElementById(""));
}
