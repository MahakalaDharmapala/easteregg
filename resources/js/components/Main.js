import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navigation from "./Nav"
import Home from "./Home"
import CatalogScreen from "./CatalogScreen"
import RegisterForm from "./RegisterForm"
import LogInScreen from "./LogInScreen"
import SalesTable from "./SalesTable"
import NavigationBarAdmin from "./NavigationBarAdmin";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import EditGame from './EditGame';


function Main(){
    return (
        <Router>
            <main>
          <NavigationBarAdmin />
                    <Routes>
                        
                        <Route exact path="/easteregg-1/public/" element={<CatalogScreen/>} />
                        <Route exact path="/easteregg-1/public/RegisterForm" element={<RegisterForm/>} />
                        <Route exact path="/easteregg-1/public/LogInScreen" element={<LogInScreen/>} />
                        <Route exact path="/easteregg-1/public/SalesTable" element={<SalesTable/>} />
                        <Route exact path="/easteregg-1/public/EditGame" element={<EditGame/>} />
                    </Routes>
            </main>
        </Router>
    )
}

export default Main;
if(document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}