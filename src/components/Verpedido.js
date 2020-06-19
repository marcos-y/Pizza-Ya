import React, { useState } from 'react';
import icon from './cesta.svg';
import './Verpedido.css';
import './ProductoEnModal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {
    Link,
 } from "react-router-dom";
 import ProductoEnModal from './ProductoEnModal';


const Verpedido = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
     }

    return (
        <>
            <div className="Verpedido" onClick={handleShow}>
                <img src={icon} width="50" height="50"></img>
                <h5>Ver mi pedido</h5>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mi pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/*---------------------------CART----------------------------nombre={props.nombre}*/}
                    <ProductoEnModal onAddQuant={props.onAddQuant}  cart={props.cart}></ProductoEnModal>
                    <h6>Total:${props.total}</h6>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/PedidoConfirmado">
                        <Button variant="primary" onClick={handleClose}>
                            Confirmar pedido
                        </Button>
                    </Link>
                    <Button variant="secondary" onClick={handleClose}>
                        Seguir agregando al pedido
          </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Verpedido;