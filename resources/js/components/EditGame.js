import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavigationBarAdmin from "./NavigationBarAdmin";




const EditGame = props => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false);
    const location=useLocation();
    const navigate=useNavigate();

    useEffect(() => {
        (async () => {
        setLoading(true);
        const response = await Axios({
            method: 'get',
            url: 'api/ticket'
            
            })
            .then(response => {
                console.log('response.data',response.data)
                setData(response.data);
            })
        setLoading(false);
        

        })();
    }, []);
    function sendingAddGame() {
             navigate("/easteregg-1/public/AddGame", {

           state: {

            u_token: location.state.u_token

           },

         });


        alert(location.state.u_token);

    }

                    
        return (
            <Container >
                <NavigationBarAdmin 
                u_token={location.state.u_token}/>
                <h1 className="mt-5">Juegos</h1>
                <Button className="mt-3" variant="warning"
                onClick={() => {

                    sendingAddGame();

                }}>Agregar nuevo juego</Button>
                <Table striped bordered hover variant="dark" className=" mr-5 my-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Juego</th>
                        <th>Sinopsis</th>
                        <th>plataforma</th>
                        <th>clasificacion</th>
                        <th>Desarolladora</th>
                        <th>Año de Salida</th>
                        <th>Genero</th>
                        <th>Precio</th>
                        <th>Existencia</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(dataItem =>(
                        <tr >
                            <td>{dataItem.id}</td>
                            <td>{dataItem.Juego}</td>
                            <td>{dataItem.Sinopsis}</td>
                            <td>{dataItem.plataforma}</td>
                            <td>{dataItem.clasificacion}</td>
                            <td>{dataItem.Desarrolladora}</td>
                            <td>{dataItem.salida_de_juego}</td>
                            <td>{dataItem.genero}</td>
                            <td>{dataItem.precio}</td>
                            <td>{dataItem.existencia}</td>
                            <td><Link as ={Link} to={`/easteregg-1/public/UpdateGame/${dataItem.id}`}><Button variant="light"  value={dataItem.id}>Editar</Button></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
            )    
    }
export default EditGame;
