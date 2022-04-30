import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navigation from "./Nav"
import Home from "./Home"
import RegisterForm from "./RegisterForm"
import SalesTable from "./SalesTable"

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function Main(){
    return (
        <Router>
            <main>
            <Navigation>
            </Navigation>
                    <Routes>
                        
                        <Route exact path="/easteregg-1/public/" component={Home} />
                        <Route exact path="/easteregg-1/public/RegisterForm" component={RegisterForm} />
                        <Route exact path="/easteregg-1/public/SalesTable" component={SalesTable} />
                    </Routes>
            </main>
        </Router>
    )
}

export default Main;
if(document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}