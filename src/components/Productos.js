import React from 'react';
import FilaProductos from './FilaProductos';

const Productos = (props) =>{

    return(
        <>
            <FilaProductos nombre="Productos" onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} cart={props.cart} pizzeria1={props.pizzeria1} ></FilaProductos>
        </>
    )
}

export default Productos;