import React from "react";
import { Container } from "react-bootstrap";

export default function FooterBar() {
    return (
        <Container fluid>
            <footer
                style={{
                    backgroundColor: "#60c46e",
                    left: 0,
                    bottom: 0,
                    color: "white",
                    textAlign: "center",
                    marginTop: "2rem",
                    position: "fixed",
                    width: "100%",
                    paddingTop: "1rem",
                }}
            >
                <p
                    style={{
                        fontFamily: ["Teko", "sans-serif"],
                        fontSize: 25,
                        color: "black",
                    }}
                >
                    Proyecto de Tópicos Avanzados de Desarrollo Web
                </p>
                <img
                    src="./images/logoEaster.png"
                    alt="EasterEggLogo"
                    width="80px"
                ></img>
            </footer>
        </Container>
    );
}
