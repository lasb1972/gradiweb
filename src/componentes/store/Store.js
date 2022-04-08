import React, { useState,useEffect } from "react";

import './Store.css';
import axios from 'axios'
import VentanaDeDatos from "../modal/VentanaDeDatos";

function Store() {
  const [titulo,setTitulo] = useState('') 
  const [colores,setColores] = useState([])
  const [size,setSize] = useState([])
  const [variants,setVariants] = useState([])
  const [talla,setTalla] = useState('')
  const [datosProductoSelecionado,setDatosProductoSelecionado] = useState({})
  const [openModal,setOpenModal] = useState(false)  
  const [valor,setValor] = useState(0)
  const [counter, setCounter] = useState(0)

  const [precio,setPrecio] = useState(0)

  const [currentImage,setCurrentImage] = useState([])
  const [lisImagen,setListImagen] =useState([])
  const [cont,setCont] = useState(0)
  const [entrar,setEntrar] = useState(false)
  const [precioFormateado,setPrecioFormateado] = useState('0')
  const [subTotalCarrito,setSubTotalCarrito] = useState('0')
  

  useEffect(() => {

    axios
   .get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js') 
   .then(response =>{
      const data = response.data
      console.log(data)

      //ACA SETEO EL TITULO DE MI PRODUCTO QUE VIENE DE LA API
      setTitulo(data.title) 
      //ACA SETEO EL PRECIO DEL PRODUCTO
      setPrecio(data.price)
      setPrecioFormateado(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USA' }).format(data.price));


      // ACA SETEO LOS COLORES QUE ME TRAIDO DE LA API. ESTOS SERAN MIS VALORES PARA MIS RADIO-BUTTONS 
      setColores(data.options[0].values) 
      // ACA SETEO LAS DIFERENTES MEDIDAS DE CALZADOS QUE ME TRAIGO DE LA API
      setSize(data.options[1].values) 
      //ACA SETEO EL ARREGLO VARIANTS
      setVariants(data.variants)  
      //ESTE SERA EL VALOR POR DEFECTO QUE AL COMIENZO TENDRA LA TALLA DEL CALZADO
      setTalla(data.options[1].values[0])
      //ME TRAIGO LA DESCRIPCION DEL PRODUCTO DESDE LA API 
      //Y POR SER UN ELEMENTO DE HTML(SPAN) PERO DE TIPO STRING HAGO LO SIGUIENTE:
      if (entrar){
      let txt = document.getElementById('descripcion')
      txt.innerHTML = data.description}

      setCurrentImage(data.media[0].src)

      let imagenes =[]
      let json

      data.media.map(item => {
          json = {
            "id": item.position,
            "src":item.src
          }
        return imagenes.push(json)
      })
      
      console.log(JSON.stringify(imagenes)) 

      setListImagen(imagenes)
      
      setEntrar(true)
   })


  },[entrar])

  const setearTalla = (t) =>{
    setTalla(t)
  }

  const agregar= () =>{

    var i 
    //BUSCO EL BOTON RADIO SELECCIONADO POR EL USUARIO
    for (i = 0; i < document.form.radio.length; i++){ 
      if (document.form.radio[i].checked) {
       break; 
     }
    } 
    //GUARDO EN UNA VARIABLE EL RADIO BOTON SELECCIONADO POR EL USUARIO
    let colorSeleccionado = document.form.radio[i].value
  
     //RECORRO EL ARREGLO VARIANTS Y COMPARO CON EL 'COLOR' Y LA 'TALLA'
    //SELECCIONADOS POR EL USUARIO PARA OBTENER EL JSON CON LOS DATOS DEL PRODUCTO
    for (i = 0; i < variants.length; i++) { 
        if(colorSeleccionado===variants[i].option1 && talla===variants[i].option2)
        {
     
          //METO EN UN JSON LOS DATOS MAS IMPORTANTES DEL ARREGLO VARIANTS
          const json ={
             "idProducto": variants[i].id,
             "available": variants[i].available===true?'DISPONIBLE':'NO DISPONIBLE',
             "name":variants[i].name,
             "precio":variants[i].price,
             "cantidad":valor,
             "subtotal":counter
          }
          console.log(json)
          //GUARDO EL JSON PARA MOSTRAR ESTOS DATOS EN UN MODAL AL USUARIO
          setDatosProductoSelecionado(json)
          setOpenModal(true)
        }
    }   
  }

  const cerrar = () => {
    setOpenModal(false)
  }


  const incrementar= () =>{
    setValor(valor+1)
    setCounter(counter + 1*precio)

    setSubTotalCarrito(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USA' }).format(counter + 1*precio))

  }

  const decrementar= () =>{
    if (valor>0){
      setValor(valor-1)
      setCounter(counter - 1*precio)
      setSubTotalCarrito(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USA' }).format(counter - 1*precio))

    }  
  }
  

  const carrusel = (e) =>{


    if (e.target.id==="btn-anterior" || e.target.id==="fa-angle-left"){
        if (cont>0){
          setCurrentImage(lisImagen[cont-1].src)
          setCont(cont-1);
        }else{
          setCurrentImage(lisImagen[lisImagen.length - 1].src)
          setCont(lisImagen.length -1)
        }
    }
    else{
      if (e.target.id==="btn-siguiente" || e.target.id==="fa-angle-right"){
          if (cont < lisImagen.length -1){
            setCurrentImage(lisImagen[cont+1].src)
            setCont(cont+1);
          }else{
            setCurrentImage(lisImagen[0].src)
            setCont(0)
          }
      }
    }
}

const modalHandler = (idimagen) =>{
  console.log(idimagen)
  for (var i = 0; i < lisImagen.length; i++) {
    if (lisImagen[i].id===idimagen){
      setCont(i)
      setCurrentImage(lisImagen[i].src)
    }  
  }  
}

  return (
    entrar?  
    <div className="store">
     
          <div className='marcoPricipal'>
            <div className='marcoImagen'>
               <div className='marco'>
                  <div id="marcoAnterior">
                    <button id="btn-anterior" onClick={carrusel}  >
                      <i id="fa-angle-left" className="fas fa-angle-left" ></i>
                    </button>
                  </div>
                  <div>
                     <img id="img" src={currentImage} alt=""/>
                  </div>   
                  <div id="marcoSiguiente" >
                    <button id="btn-siguiente" onClick={carrusel}  >
                      <i id="fa-angle-right" className="fas fa-angle-right"></i>
                    </button>     
                  </div>
               </div>
               <div className='marcoMini'>
               {lisImagen.map(img=>(
                  <div key={img.id}> <img id="img" src={img.src} alt="" 
                                      onClick={() => modalHandler(img.id)}/>  </div>
               ))}   
                </div>
            </div>
            <div className='marcoInformacion'>
			  <div className="titulo">{titulo}</div>   
                <div className="precio">{precioFormateado}</div>
                <form id="form" name="form"> 
                    <div className="color">
                        <div className="colorBody">
                            <label className="tituloRadioBoton"> Color:</label>
                            <div  className="radio-botones" >                            
                                {colores.map(item =>(
                                    item==='Red' ?
                                    <div key={item}  style={{marginRight:'5px'}}>
                                            <input  type="radio"
                                                    name="radio" id="Initiated" value={item} defaultChecked/>                              
                                            <label  className="labelRadioBoton">
                                               {item}
                                            </label>    
                                    </div> 
                                    :
                                    <div key={item} style={{marginRight:'5px'}}>
                                        <input  type="radio"
                                                name="radio" id="Initiated" value={item} />             
                                        <label  className="labelRadioBoton">
                                           {item}
                                        </label>    
                                    </div>                                       
                                ))}
                            </div>
                        </div>
                    </div>
                </form> 
                    <div className="marcoTallas">
                        <div className="tallas">
                            <div className="talla"> <label style={{margin:0}}>Talla:</label>
                                <div className="size" id="size" name="size">
                                  {talla}
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid" >
                            <div className="row bodyTallas">
                                {size.map(item=>(                                
                                    <div className="col-md-1  itemTalla "  key={item}
                                        onClick={() => {setearTalla(item)}}> 
                                        
                                        {item} 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="contador">
                        <button className="botonDecrementar" type="button" onClick={ decrementar} style={{outline:'none'}}>-</button>
                          <label className="labelContador">{valor}</label>
                        <button className="botonIncrementar" type="button" onClick={incrementar} style={{outline:'none'}}>+</button>
                        <div className="total" >Total: {subTotalCarrito} </div>
                    <div>
 
    </div>
                    </div>
                    <div className="descripcion" id='descripcion'>
                      
                    </div>   

                    <div className="contenido">
                        <button className="btn-agregarAlCarrito" type="submit"  onClick={agregar} >
                            Agregar al Carrito
                        </button>     
                    </div>             
            </div>
          </div>
          {openModal?<VentanaDeDatos activarModal={openModal}
                                        datosProductoSelecionado={datosProductoSelecionado} cerrar={cerrar}/>:null}

    </div>
    : null
  );
}

export default Store;
