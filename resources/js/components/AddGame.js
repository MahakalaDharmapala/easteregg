import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import NavigationBarAdmin from "./NavigationBarAdmin";
import { useLocation,useNavigate } from 'react-router-dom';



const AddGame =(props)=>{
    
    const [showErr, setShowErr] = useState(false);
    const location=useLocation();
    const navigate=useNavigate();
    const [formValue, setformValue] = React.useState({
        title: '',
        platform:'',
        classification: '',
        developer: '',
        releaseDay: '',
        sinopsis:'',
        genre:'',
        price:'',
        image: '',
    })
    const onChange = (e) => {
        e.persist();
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }
    function creatingTicket (idGame) {
                     
            var bodyParams = {
                game_id: idGame,
                date_purchase: '2022-05-18',
                batch: 50,
            };
            axios
                .post(
                    "https://localhost/easteregg-1/public/api/ticket/create_ticket",
                    bodyParams,
                    {
                        headers: {
                            Authorization:
                                "Bearer " + location.state.u_token,
                            Accept: "application/json",
                        },
                    }
                )
                .then(function (response) {
                    console.log(response);
                    
                })
                .catch(function (error) {
                    console.log(error);
                    
                });
        }
    function haveId(){
        axios
        .get(
            "https://localhost/easteregg-1/public/api/game/haveId")
            .then(function (response) {

                console.log(response);
                creatingTicket(response.data.id);

             

            })

            .catch(function (error) {

                console.log(error);

            });

    }
  
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("title", formValue.title)
        formData.append("platform", formValue.platform)
        formData.append("classification", formValue.classification)
        formData.append("developer", formValue.developer)
        formData.append("releaseDay", formValue.releaseDay)
        formData.append("sinopsis", formValue.sinopsis)
        formData.append("genre", formValue.genre)
        formData.append("price", formValue.price)
        formData.append("image", formValue.image)

        axios.post("https://localhost/easteregg-1/public/api/game",
         
        formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }

        ).then(response => {
            console.log('response: ');
            console.log(response);
            haveId();

        }).catch(error => {
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
                        <Alert.Heading>
                            Datos incorrectos.
                        </Alert.Heading>
                        <p>
                            Vuelva a intentarlo.
                        </p>
                    </center>
            </Alert>

        <Container fluid>
        <NavigationBarAdmin 
        u_token={location.state.u_token}/>
            <h1 className="mt-5">Agregar nuevo Juego</h1>
            <Row xl={1} className=" m-5 " >
                <Form  onSubmit={handleSubmit}>

                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Juego:</Form.Label>
                                <Form.Control type="text" placeholder='Nombre del juego' name="title"  value={formValue.title} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Plataforma:</Form.Label>
                                <Form.Control type="text" placeholder='Ingresa las plataformas' name="platform"  value={formValue.platform} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Clasificacion:</Form.Label>
                                <Form.Control type="text" placeholder='Escriba la clasificacion del juego' name="classification"  value={formValue.classification} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Desarrolladora:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese la desarrolladora' name="developer"  value={formValue.developer} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Año de salida:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese el año de salida del juego ' name="releaseDay"  value={formValue.releaseDay} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Sinopsis</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese la sinopsis del juego  ' name="sinopsis"  value={formValue.sinopsis} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Genero:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese el genero del juego' name="genre"  value={formValue.genre} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Portada:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese la imagen del juego' name="image"  value={formValue.image} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Precio:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese el precio del juego' name="price"  value={formValue.price} onChange={onChange}>
                            </Form.Control>
                        </Form.Group>
                    {/* </Form.Row> */}
                    <Button variant="primary" type="submit">
                        Agregar Juego
                    </Button>
                </Form>
            </Row>
        </Container>
        </div>
        )    
    }
export default AddGame;