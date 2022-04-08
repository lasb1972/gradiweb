import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Store from "./componentes/store/Store";
import Navbar from './componentes/navbar/Navbar';
import Home from "./componentes/home/Home";

function App() {

  return (
    <div className="App">
        <Router>
         <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>}/>
           
         
          </Routes>
        </Router>
    </div>
  );
}

export default App;
