import React from 'react';
import './PedidoConfirmado.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeaderPedido from './HeaderPedido';

import {
    Link,
} from "react-router-dom";


const EnvioDom = () => {
    return (
        <>
            <HeaderPedido></HeaderPedido>
            
                <div className="envio">
                    <h3>Entrega a domicilio</h3>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control as="select">
                                <option>CABA</option>
                                <option>Banfield</option>
                                <option>Quilmes</option>
                                <option>La Boca</option>
                                <option>Lomas de Zamora</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Direccion de Entrega</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su domicilio" />
                        </Form.Group>
                    </Form>
                    <Button variant="danger" size="lg">Enviar</Button>
                    <Link to="/PedidoConfirmado">
                        <h5>Volver</h5>
                    </Link>
                </div>

        </>
    )
}

export default EnvioDom;