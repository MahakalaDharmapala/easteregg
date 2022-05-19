import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Card, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import NavigationBarAdmin from "./NavigationBarAdmin";

export default function CardGameSpecific(props) {
    const location = useLocation();

    // useEffect(() => {
    //     findingBatch();
    // }, []);

    console.log(location.state.u_role);
    //CURRENT DATE
    const current = new Date();
    let year = current.getFullYear();
    let month = addZero(current.getMonth() + 1);
    let day = addZero(current.getDate());

    let hours = addZero(current.getHours());
    let minutes = addZero(current.getMinutes());
    let seconds = addZero(current.getSeconds());

    let currentDate =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;

    //RETORNAR EL BATCH DEL ULTIMO TICKET
    function findingBatch() {
        axios
            .get(
                "https://localhost/easteregg-1/public/api/ticket/getBatch/'.$id.'",
                {
                    params: {
                        id: location.state.id,
                    },
                }
            )
            .then(function (response) {
                console.log(response.data.ticket_batch);
                creatingTicket(response.data.ticket_batch);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //HACER EL TICKET CON GAME_ID, DATE_PURCHASE, BATCH, CREATED_AT (POST)
    //2022-05-07 00:02:28
    function creatingTicket(batch) {
        //CURRENT QUANTITY
        var inputValue = document.getElementById("quantityToBuy").value;

        if (batch - inputValue < 0) {
            alert(
                "IMPOSIBLE CREAR UN TICKET CON EXISTENCIAS NEGATIVAS.... \nEXISTENCIAS: " +
                    batch +
                    "\nSOLICITADAS: " +
                    inputValue
            );

            console.log("IMPOSIBLE CREAR UN TICKET CON EXISTENCIAS NEGATIVAS");
            return 0;
        } else {
            var bodyParams = {
                game_id: location.state.id,
                date_purchase: currentDate,
                batch: batch - inputValue,
            };
            axios
                .post(
                    "https://localhost/easteregg-1/public/api/ticket/create_ticket",
                    bodyParams,
                    {
                        headers: {
                            Authorization:
                                "Bearer " + location.state.token.token,
                            Accept: "application/json",
                        },
                    }
                )
                .then(function (response) {
                    console.log(response);
                    findingTicketID();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function findingTicketID() {
        axios
            .get(
                "https://localhost/easteregg-1/public/api/ticket/getBatch/'.$id.'",
                {
                    params: {
                        id: location.state.id,
                    },
                }
            )
            .then(function (response) {
                console.log(response.data);
                creatingSale(response.data.ticket_id);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function creatingSale(id) {
        //CURRENT QUANTITY
        var inputValue = document.getElementById("quantityToBuy").value;

        var bodyParams = {
            user_id: location.state.user_id,
            ticket_id: id,
            quantity: inputValue,
            mount: parseInt(location.state.price) * inputValue,
            created_at: currentDate,
        };

        axios
            .post(
                "https://localhost/easteregg-1/public/api/sale/create_sale",
                bodyParams,
                {
                    headers: {
                        Authorization: "Bearer " + location.state.token.token,
                        Accept: "application/json",
                    },
                }
            )
            .then(function (response) {
                console.log(response.data);
                alert(
                    "SU COMPRA HA SIDO REALIZADA, GRACIAS POR COMPRAR EN EasterEgg!: \n\nJUEGO: " +
                        location.state.title +
                        "\nCOPIAS: " +
                        inputValue +
                        "\nPAGO: " +
                        parseInt(location.state.price) * inputValue +
                        " MXN"
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <Container>
            {location.state.user_role != 1 && location.state.user_role != 2 ? (
                <NavigationBar />
            ) : (
                [
                    location.state.user_role === 1 ? (
                        <NavigationBar u_name={location.state.user_name} />
                    ) : (
                        [
                            location.state.user_role === 2 ? (
                                <NavigationBarAdmin
                                    u_name={location.state.user_name}
                                />
                            ) : (
                                <div>ERROR EN EL RENDERIZADO CONDICIONAL</div>
                            ),
                        ]
                    ),
                ]
            )}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    marginTop: "3rem",
                    // marginTop: "6rem",
                }}
            >
                <Row
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        border: 3,
                        borderColor: "black",
                    }}
                >
                    <Col xs={6}>
                        <Card className="bg-light text-black">
                            <Card.Img
                                src={location.state.image}
                                alt="Card image"
                            />

                            <Card.ImgOverlay>
                                <Button
                                    onClick={() => {
                                        if (location.state.token != undefined) {
                                            if (
                                                document.getElementById(
                                                    "quantityToBuy"
                                                ).value != null &&
                                                document.getElementById(
                                                    "quantityToBuy"
                                                ).value > 0 &&
                                                document.getElementById(
                                                    "quantityToBuy"
                                                ).value <= 50
                                            ) {
                                                findingBatch();
                                            } else {
                                                alert(
                                                    "POR FAVOR INSERTA UNA CANTIDAD VALIDA (1 - 50)"
                                                );
                                            }
                                        } else {
                                            alert(
                                                "NECESITAS ESTAR LOGGEADO PARA HACER UNA COMPRA"
                                            );
                                        }
                                    }}
                                    variant="success"
                                    style={{
                                        fontFamily: ["Poppins", "sans-serif"],
                                    }}
                                >
                                    COMPRAR ({location.state.price} MXN)
                                </Button>
                                <input
                                    type="number"
                                    id="quantityToBuy"
                                    name="quantity"
                                    min="1"
                                    max="50"
                                    placeholder="Quantity"
                                    style={{
                                        marginLeft: ".5rem",
                                        borderRadius: 5,
                                        width: "5rem",
                                        height: "2.2rem",
                                    }}
                                />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col
                        xs={4}
                        style={{ fontFamily: ["Poppins", "sans-serif"] }}
                    >
                        <h2>{location.state.title}</h2>
                        <p
                            style={{
                                textAlign: "justify",
                            }}
                        >
                            <strong>Sinopsis: </strong>{" "}
                            {location.state.sinopsis}
                        </p>

                        <p>
                            <strong>Developer:</strong>{" "}
                            {location.state.developer}
                        </p>
                        <p>
                            <strong>Release date:</strong>{" "}
                            {location.state.releaseDay}
                        </p>
                        <p>
                            <strong>Genre:</strong> {location.state.genre}
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

if (document.getElementById("cardGameSpecific")) {
    ReactDOM.render(
        <CardGameSpecific />,
        document.getElementById("cardGameSpecific")
    );
}
