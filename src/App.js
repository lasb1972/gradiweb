import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Store from "./componentes/store/Store";
import Navbar from './componentes/navbar/Navbar';
import Home from "./componentes/home/Home";
import IniciarSesion from "./componentes/sesion/IniciarSesion";

function App() {

  return (
    <div className="App">
        <Router>
         <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sesion' element={<IniciarSesion/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
