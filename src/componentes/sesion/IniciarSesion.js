import React, {useState,useRef} from 'react';
import './IniciarSesion.css'
import Store from "../store/Store";


function IniciarSesion(){
  const [comparacion, setComparacion] = useState(false) 
  const [alerta,setAlerta] = useState('')
  
  const email = useRef()
  const clave = useRef()
      
  const comparar = (e) =>{      

             if(('lasb72@hotmail.com'===email.current.value) && ('1'===clave.current.value))
                {
                  console.log("email: "+email.current.value)
                  console.log("clave: "+clave.current.value)
                  setComparacion(true)

                } else{console.log("clave o usuario erroneo")}
     

              if (!comparacion){
                setAlerta("El correo que ha ingresado no esta registrado")
                document.getElementById('alerta').style="background:rgb(12, 170, 231)"
              }

 }    




const onSubmit = (e) => {
    e.preventDefault();
    comparar()
}  

let lineas = (       
    <form className="cuerpo-form" onSubmit={onSubmit}>
      <div style={{position: 'relative'}}>
        <h1 className="alerta" id="alerta">{alerta}</h1>
        <div className="cuerpo-div">
            <input type="text" className="cuerpo" ref={email} placeholder="Dirección de correo electrónico" required="required"></input>
            <input type="text" className="cuerpo" ref={clave} placeholder="Contraseña" required="required"></input>
            <button type="submit" className="botonSesion">Iniciar Sesión</button>
        </div>
      </div>  
    </form>
)

  return ( 
      comparacion ? <Store/>:lineas
  )
}

export default IniciarSesion;