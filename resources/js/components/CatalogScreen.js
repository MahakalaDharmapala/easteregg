import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGame from "./CardGame";
import NavigationBar from "./NavigationBar";
import NavigationBarAdmin from "./NavigationBarAdmin";

import { useLocation } from "react-router-dom";

import FooterBar from "./FooterBar";

const CatalogScreen = () => {
    //RECIBE LOS PARAMETROS DEL LOGIN
    const location = useLocation();

    if (location.state != null) {
        console.log("DATOS");
        console.log(location.state);
        console.log(location.state.u_name);
        console.log(location.state.u_role);
        console.log(location.state.u_token);
        console.log(location.state.u_id);
    } else {
        console.log("NADA QUE MOSTRAR");
    }

    return (
        <Container fluid style={{ marginBottom: "10rem" }}>
            {/* {location.state === null || location.state.u_role === 1 ? (
    <NavigationBar />
    ) : (
    <NavigationBarAdmin />
    )} */}

            {location.state === null ? (
                <NavigationBar />
            ) : (
                [
                    location.state.u_role === 1 ? (
                        <NavigationBar u_name={location.state.u_name} />
                    ) : (
                        [
                            location.state.u_role === 2 ? (
                                <NavigationBarAdmin
                                    u_token={location.state.u_token}
                                    u_name={location.state.u_name}
                                />
                            ) : (
                                <div>ERROR EN EL RENDERIZADO CONDICIONAL</div>
                            ),
                        ]
                    ),
                ]
            )}

            <div>
                {location.state === null ? (
                    <CardGame />
                ) : (
                    <CardGame
                        u_token={location.state.u_token}
                        u_id={location.state.u_id}
                        u_role={location.state.u_role}
                        u_name={location.state.u_name}
                    />
                )}
            </div>
            <FooterBar />
        </Container>
    );
};

export default CatalogScreen;

if (document.getElementById("")) {
    ReactDOM.render(<CatalogScreen />, document.getElementById(""));
}
