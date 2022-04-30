import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Container, CardGroup, Card, Button, Row } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


export default function CardGame(props) {
    //OBTENIENDO DATOS CON AXIOS
    const [game, setGames] = useState([]);


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

    //PARA QUE CARGUE LA FUNCION APENAS CARGUE LA PÁGINA
    useEffect(() => {
        getGames();
    }, []);



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
                        <Button variant="outline-success">SEE MORE</Button>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

if (document.getElementById('')) {
    ReactDOM.render(<RegisterForm />, document.getElementById(''));
}