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


const SalesTable = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
        setLoading(true);
        const response = await Axios({
            method: 'get',
            url: 'api/sales'
            
            })
            .then(response => {
                console.log('response.data',response.data)
                setData(response.data);
            })
        setLoading(false);
        

        })();
    }, []);
    

    //BORRAR POST        
    const handleDelete = ( id) => async (e) =>{
        console.log(id);
        e.preventDefault();
          await Axios.get('../public/api/saleDestroy', {
            params: {
             
              id: id,
              
            }
            
          })
          .then(response=>{
            window.location = 'SalesTable'
          })
          .catch(error => {
            console.log('Error Login', error.response.data )
          })
        }

            
        return (
            <Container >
                
                <h1 className="mt-5">Ventas</h1>
                
                <Table striped bordered hover variant="dark" className=" mr-5 my-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Juego</th>
                        <th>copias</th>
                        <th>MontoTotal</th>
                        <th>Fecha</th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(dataItem =>(
                        <tr >
                            <td>{dataItem.id}</td>
                            <td>{dataItem.Usuario}</td>
                            <td>{dataItem.Juego}</td>
                            <td>{dataItem.copias}</td>
                            <td>{dataItem.MontoTotal}</td>
                            <td>{dataItem.Fecha_de_compra}</td>
                            <td><Button variant="danger" onClick={handleDelete(dataItem.id, dataItem.id, dataItem.copias)}>Borrar</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
            )    
    }
export default SalesTable;
if (document.getElementById('')) {
    ReactDOM.render(<SalesTable />, document.getElementById(''));
}