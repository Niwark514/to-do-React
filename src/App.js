import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./components/header/Header";
import React from "react";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";


function App() {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}
export default App;

