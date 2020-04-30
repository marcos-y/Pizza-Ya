import React from 'react';
import './PedidoConfirmado.css';
import Button from 'react-bootstrap/Button';
import HeaderPedido from './HeaderPedido';

import {
    Link,
  } from "react-router-dom";

const PedidoConfirmado = () =>{

    return(
        <>
       
        <div>
            <HeaderPedido></HeaderPedido>
            <div className="opciones">
                <Link to="/EnvioDom">
                <Button variant="danger" size="lg">Envio a domicilio</Button>
                </Link>
                <Link to="/RetiroSucursal">
                <Button variant="danger" size="lg">Retiro por sucursal</Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default PedidoConfirmado;