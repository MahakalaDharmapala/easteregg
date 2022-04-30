import React from 'react'
import { Card, Button} from 'react-bootstrap'
import SalesTable from "./SalesTable"
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavAdmin = () => {
    return(
        <Container>
            <h1>Administrador</h1>
            <h5>Seleccione una opción para modificar</h5>
            <Button variant="primary" as={Link} to="/easteregg-1/public/SalesTable">Ver ventas</Button>{' '}
            <Button variant="secondary" as={Link} to="">Ver Juegos</Button>{' '}
            
            
        </Container>
    )
}

export default NavAdmin;