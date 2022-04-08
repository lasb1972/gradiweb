import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () =>{
  return (
    <div className="barra" >
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <Link to="/"><img src="./gradiweb.gif" style={{width:'113px',height:'57px'}} alt="" /></Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
               <li className="nav-item active">
               <Link className="nav-link" to='/'>Home</Link>
               </li>
               <li className="nav-item">
               <Link className="nav-link" to='/sesion'>Iniciar Sesión</Link>
               </li>
            </ul>
         </div>
         </nav>
    </div>

  );
}

export default Navbar;