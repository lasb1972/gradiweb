import React,{useState} from "react";
import {Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import './VentanaDeDatos.css';

const VentanaDeDatos = (props) => {
  //  const [activarModal,setActivarModal] = useState(props.activarModal)

    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    const cerrar = () => {
        props.cerrar(false)   
    }

    return(
      <div>
        <Modal isOpen={props.activarModal} style={modalStyles}>
            <ModalHeader>
               Agregado al Carrito
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <label id="labelModal">Id producto:</label>
                    <Label for="idProducto">{props.datosProductoSelecionado.idProducto}</Label>
                </FormGroup>
                <FormGroup>
                    <label id="labelModal">Estado:</label>
                    <Label id="labelModal"  for="available">{props.datosProductoSelecionado.available}</Label>
                </FormGroup>
                <FormGroup>
                    <label id="labelModal">Nombre del producto:</label>
                    <Label id="labelModal"  for="name">{props.datosProductoSelecionado.name}</Label>
                </FormGroup>
                <FormGroup>
                    <label id="labelModal">Precio del producto:</label>
                    <Label id="labelModal"  for="precio">{props.datosProductoSelecionado.precio}</Label>
                </FormGroup>
                <FormGroup>
                    <label id="labelModal">Cantidad de unidades:</label>
                    <Label id="labelModal"  for="precio">{props.datosProductoSelecionado.cantidad}</Label>
                </FormGroup>
                <FormGroup>
                    <label id="labelModal">Subtotal del carrito:</label>
                    <Label id="labelModal"  for="precio">{props.datosProductoSelecionado.subtotal}</Label>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={cerrar}>Cerrar</Button>
            </ModalFooter>
        </Modal>
      </div>
    )
}

export default VentanaDeDatos