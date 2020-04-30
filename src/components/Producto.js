import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from './pizza1.jpg';
import './Producto.css';
import Modal from 'react-bootstrap/Modal';
import ProductoEnModal from './ProductoEnModal';

import {
   Link,
} from "react-router-dom";

const Producto = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        props.onAddToCart(JSON.parse(props.product))
    }


    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                    <div className="boton2">
                        <Button variant="outline-info" onClick={handleShow} >Agregar al pedido</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mi pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/*---------------------------CART----------------------------*/}
                    <ProductoEnModal nombre={props.nombre} onAddQuant={props.onAddQuant} cart={props.cart} ></ProductoEnModal>
                    <h6>Total:$ {props.stock}</h6>
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

export default Producto;