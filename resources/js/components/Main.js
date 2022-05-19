import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Home from "./Home"
import CatalogScreen from "./CatalogScreen"
import RegisterForm from "./RegisterForm"
import LogInScreen from "./LogInScreen"
import SalesTable from "./SalesTable"


import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import EditGame from './EditGame';
import AddGame from './AddGame';
import UpdateGame from './UpdateGame';
import CardGameSpecific from './CardGameSpecific';
import Users from './Users';
import UpdateUsers from './UpdateUsers';


function Main(){
    return (
        <Router>
            <main>
        
                    <Routes>
                        
                        <Route exact path="/easteregg-1/public/" element={<CatalogScreen/>} />
                        <Route exact path="/easteregg-1/public/RegisterForm" element={<RegisterForm/>} />
                        <Route exact path="/easteregg-1/public/LogInScreen" element={<LogInScreen/>} />
                        <Route exact path="/easteregg-1/public/SalesTable" element={<SalesTable/>} />
                        <Route exact path="/easteregg-1/public/EditGame" element={<EditGame/>} />
                        <Route exact path="/easteregg-1/public/AddGame" element={<AddGame/>} />
                        <Route exact path="/easteregg-1/public/UpdateGame/:id" element={<UpdateGame/>} />
                        <Route exact path="/easteregg-1/public/gameSpecific" element={<CardGameSpecific />}/>
                        <Route exact path="/easteregg-1/public/Users" element={<Users />} />
                        <Route exact path="/easteregg-1/public/UpdateUsers/:id" element={<UpdateUsers/>} />

                   
                    </Routes>
            </main>
        </Router>
    )
}

export default Main;
if(document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}