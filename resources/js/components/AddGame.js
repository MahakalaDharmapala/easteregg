import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';



function AddGame(){
    
    const [data, setData] = useState({

    })
  
    const handleInputChange = (event) => {

        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    
    }
   

    //POST
    const handleSubmit = async (e) =>{

        }
    


    
            
    return (
        <Container fluid>
            <h1 className="mt-5">Agregar nuevo Juego</h1>
            <Row xl={1} className=" m-5 " >
                <Form  onSubmit={handleSubmit}>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Juego:</Form.Label>
                                <Form.Control type="text" placeholder='Nombre del juego' name="game" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Sinposis:</Form.Label>
                                <Form.Control type="text" placeholder='Escriba la sinopsis del juego' name="sinopsis" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Plataforma:</Form.Label>
                                <Form.Control type="text" placeholder='Ingresa las plataformas' name="plataforma" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Clasificacion:</Form.Label>
                                <Form.Control type="text" placeholder='Escriba la clasificacion del juego' name="clasificacion" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Desarrolladora:</Form.Label>
                                <Form.Control type="text" placeholder='Nombre del la desarrolladora' name="desarrolladora" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Año de salida:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese el año de salida del juego ' name="año" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Genero:</Form.Label>
                                <Form.Control type="text" placeholder='Ingrese el genero del juego' name="genero" onChange={handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Precio:</Form.Label>
                                <Form.Control type="number" placeholder='Precio del juego' name="precio" onChange={handleInputChange}>
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
export default AddGame;