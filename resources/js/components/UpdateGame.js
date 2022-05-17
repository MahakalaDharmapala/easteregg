import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';




const UpdateGame = () => {
    
    const [formValue, setformValue] = useState({
        title: '',
        platform:'',
        classification: '',
        developer: '',
        releaseDay: '',
        sinopsis: '',
        genre: '',
        price: ''
        
    })



    const onChange = (e) => {
        e.persist();
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    }
     
    
  
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("id", formValue.id)
        formData.append("title", formValue.title)
        formData.append("platform", formValue.platform)
        formData.append("classification", formValue.classification)
        formData.append("developer", formValue.developer)
        formData.append("releaseDay", formValue.releaseDay)
        formData.append("sinopsis", formValue.sinopsis)
        formData.append("genre", formValue.genre)
        formData.append("price", formValue.price)

        axios.post("https://localhost/easteregg-1/public/api/game/update", 
        formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }

        ).then(response => {
            console.log('response: ');
            console.log(response);

        })
    };

 
    


    
            
    return (
        <Container fluid>
        <h1 className="mt-5">Actualizar datos del Juego </h1>
        <Row xl={1} className=" m-5 " >
            <Form  onSubmit={handleSubmit} key={formValue.id}>
            <Form.Group className=" mr-5" controlId="">
                        <Form.Label>ID:</Form.Label>
                            <Form.Control type="text" placeholder='Id del juego' name="id" value={formValue.id} onChange={onChange}  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Juego:</Form.Label>
                            <Form.Control type="text" placeholder='Nombre del juego' name="title" value={formValue.title} onChange={onChange}  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Plataforma:</Form.Label>
                            <Form.Control type="text" placeholder='Ingresa las plataformas' name="platform" value={formValue.platform} onChange={onChange}  >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Clasificacion:</Form.Label>
                            <Form.Control type="text" placeholder='Escriba la clasificacion del juego' name="classification" value={formValue.classification} onChange={onChange} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Desarrolladora:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese la desarrolladora' name="developer" value={formValue.developer} onChange={onChange} >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className=" mr-5" controlId="">
                        <Form.Label>Año de salida:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese el año de salida del juego ' name="releaseDay" value={formValue.releaseDay} onChange={onChange} >
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
                        <Form.Label>Precio:</Form.Label>
                            <Form.Control type="text" placeholder='Ingrese el precio del juego' name="price" value={formValue.price} onChange={onChange}>
                        </Form.Control>
                    </Form.Group>
                {/* </Form.Row> */}
                <Button variant="primary" type="submit">
                    Actualizar Juego
                </Button>
            </Form>
        </Row>
    </Container>
        )    
    }
export default UpdateGame;