import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import NavigationBarAdmin from "./NavigationBarAdmin";




const UpdateUsers = () => {
    
    const [formValue, setformValue] = useState({
        name: '',
        lastName:'',
        email: '',
        password: ''

        
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
        formData.append("name", formValue.name)
        formData.append("lastName", formValue.lastName)
        formData.append("email", formValue.email)
        formData.append("password", formValue.password)


        Axios.post("https://localhost/easteregg-1/public/api/user/update", 
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
        <div>
        <Container>
        <NavigationBarAdmin/>
        <h1 className="mt-5">Actualizar Datos</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>ID del  usuario</Form.Label>
                <Form.Control type="text" placeholder="Profavor ingrese tu ID" name="id" value={formValue.id} onChange={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" placeholder="Nombre de usuario" name="name" value={formValue.name} onChange={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiclastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="apellido" name="lastName" value={formValue.lastName} onChange={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" value={formValue.email} onChange={onChange}/>
            </Form.Group>    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" name="password" value={formValue.password} onChange={onChange}/>
            </Form.Group>
            <Button variant="dark" type="submit">
                Actualizar Datos
            </Button>
            </Form>
        </Container>
      </div>
      );
    }
    
export default UpdateUsers;