import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';



const UpdateGame =()=>{
 
    


    
            
    return (
        <Container fluid>
        <h1 className="mt-5">Agregar nuevo Juego</h1>
        <Row xl={1} className=" m-5 " >
            <Form  >
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Juego:</Form.Label>
                            <Form.Control type="text" placeholder='Nombre del juego' name="title"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Plataforma:</Form.Label>
                            <Form.Control type="text" placeholder='Ingresa las plataformas' name="platform"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Clasificacion:</Form.Label>
                            <Form.Control type="text" placeholder='Escriba la clasificacion del juego' name="classification"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Desarrolladora:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese la desarrolladora' name="developer"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Año de salida:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese el año de salida del juego ' name="releaseDay"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Sinopsis</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese la sinopsis del juego  ' name="sinopsis"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Genero:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese el genero del juego' name="genre"  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Precio:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese el precio del juego' name="price">
                        </Form.Control>
                    </Form.Group>
                {/* </Form.Row> */}
                <Button variant="primary" type="submit">
                    Agregar Juego
                </Button>
            </Form>
        </Row>
    </Container>
        )    
    }
export default UpdateGame;