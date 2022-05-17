import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


const Users = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
        setLoading(true);
        const response = await Axios({
            method: 'get',
            url: 'api/user'
            
            })
            .then(response => {
                console.log('response.data',response.data)
                setData(response.data);
            })
        setLoading(false);
        

        })();
    }, []);
    

  
            
        return (
            <Container >
                
                <h1 className="mt-5">Usuarios</h1>
                
                <Table striped bordered hover variant="dark" className=" mr-5 my-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>email</th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(dataItem =>(
                        <tr >
                            <td>{dataItem.id}</td>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.lastName}</td>
                            <td>{dataItem.email}</td>
                            <td><Link as ={Link} to={`/easteregg-1/public/UpdateUsers/${dataItem.id}`}><Button variant="danger">Editar</Button></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
            )    
    }
    export default Users;