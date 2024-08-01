import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import NavBar from './components/nav/Navbar';
import Home from './components/Home/Home'
import Exclusao from './components/nav/exclusao/Exclusao';
import Trancamento from './components/nav/trancamento/Trancamento';
import Matricula from "./components/nav/matricula/Matricula";

const App = () => {
    return(
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBar/>
                <div style={{ marginTop: '104px' }}></div> {/* Ajuste o valor conforme necessário */}
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/exclusao" element = {<Exclusao/>} />
                    <Route path="/trancamento" element = {<Trancamento/>} />
                    <Route path="/matricula" element = {<Matricula/>} />
                </Routes>
            </div>
        </Router>
    )
}

export  default App;

