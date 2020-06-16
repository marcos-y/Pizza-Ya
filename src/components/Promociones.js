import React from 'react';
import './Promociones.css'
import './Promociones.css';
import FilaProductos from './FilaProductos';

const Promociones = (props) => {

    return (
        <> 
        <FilaProductos nombre="Promociones" cantidad={props.cantidad} addTotal={props.addTotal} total={props.total} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} cart={props.cart} promos={props.promos}></FilaProductos>
        </>
    )
}

export default Promociones;