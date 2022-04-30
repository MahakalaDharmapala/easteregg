import { React, useState } from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGame from "./CardGame";
import NavigationBar from "./NavigationBar";

import FooterBar from "./FooterBar";


const CatalogScreen = () => {
    return (
        <Container fluid style={{ marginBottom: "10rem" }}>
            {/* <NavigationBar/> */}
         
            <div>
                <CardGame />
            </div>

            {/* <CardGameSpecific /> */}
            <FooterBar />
        </Container>
    );
};

export default CatalogScreen;

if (document.getElementById("")) {
    ReactDOM.render(
        <CatalogScreen />,
        document.getElementById("")
    );
}
