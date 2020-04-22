import React from 'react';
import FilaProductos from './FilaProductos';

const Productos= (props) =>{

    return(
        <>
            <FilaProductos nombre="Productos" onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} cart={props.cart} products={props.products}></FilaProductos>
        </>
    )
}

export default Productos;