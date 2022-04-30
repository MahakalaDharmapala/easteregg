import React from 'react'
import ReactDOM from 'react-dom';
import { Card, Button, Container } from 'react-bootstrap'



const Home = () => {
    return(
        <Container>
            <h1 className="mt-5">Juegos Disponibles</h1>
            <h5 className="mt-2">Regístrese o inicie sesión para poder comprar</h5>
            
        </Container>
    )
}

export default Home;
if(document.getElementById('')) {
    ReactDOM.render(<Home />, document.getElementById(""));
}