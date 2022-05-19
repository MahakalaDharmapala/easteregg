import { React, useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { Container, CardGroup, Card, Button, Row } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function CardGame(props) {
    //PARA QUE CARGUE LA FUNCION APENAS CARGUE LA PÁGINA
    useEffect(() => {
        getGames();
    }, []);

    //ENVIAR DATOS A LA CARD PROPIA DEL JUEGO.
    const navigate = useNavigate();

    //OBTENIENDO DATOS CON AXIOS
    const [game, setGames] = useState([]);

    const toComponentB = (dataGame) => {
        navigate("/easteregg-1/public/gameSpecific", {
            state: {
                id: dataGame.id,
                title: dataGame.title,
                image: dataGame.image,
                platform: dataGame.platform,
                classification: dataGame.classification,
                developer: dataGame.developer,
                releaseDay: dataGame.releaseDay,
                sinopsis: dataGame.sinopsis,
                genre: dataGame.genre,
                price: dataGame.price,
                user_id: props.u_id,
                user_name: props.u_name,
                user_role: props.u_role,
                token: props.u_token,
            },
        });
    };

    const getGames = () => {
        axios
            .get("https://localhost/easteregg-1/public/game")
            .then((res) => {
                console.log(res.data);
                setGames(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container fluid="md" style={{ paddingTop: "2rem" }}>
            <Row
                xs={1}
                sm={2}
                md={3}
                lg={4}
                style={{ margin: 0, justifyContent: "center" }}
            >
                {game.map((dataGame) => (
                    <Card
                        border="light"
                        style={{
                            marginRight: "1rem",
                            padding: 0,
                            marginBottom: "1rem",
                            width: "16rem",
                        }}
                    >
                        <Card.Img src={dataGame.image} />
                        <Card.Body>
                            <Card.Title>{dataGame.title}</Card.Title>
                            <Card.Text>{dataGame.platform}</Card.Text>
                        </Card.Body>
                        <Card.Footer>${dataGame.price} MXN </Card.Footer>
                        <Button
                            variant="outline-success"
                            onClick={() => {
                                // sendingParameters(dataGame);
                                // handleOnClick;
                                toComponentB(dataGame);
                            }}
                        >
                            SEE MORE
                        </Button>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

if (document.getElementById("")) {
    ReactDOM.render(<RegisterForm />, document.getElementById(""));
}