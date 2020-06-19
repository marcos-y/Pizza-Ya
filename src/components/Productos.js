import React from 'react';
import FilaProductos from './FilaProductos';

import {
    useParams,
  } from "react-router-dom";

const Productos = (props) =>{

    const {nombre} = useParams();
    console.log(nombre);

    return(
        <>
            <FilaProductos cantidad={props.cantidad} total={props.total} nombre={props.nombre} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} cart={props.cart} pizzeria1={props.pizzeria1} bebidas={props.bebidas} postres={props.postres}></FilaProductos>
        </>
    )
}

export default Productos;