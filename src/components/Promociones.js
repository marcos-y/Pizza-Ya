import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Promociones.css'
import Button from 'react-bootstrap/Button'
import Title from './Title';
import './Promociones.css';
import img1 from './pizza1.jpg';
import img2 from './pizza2.jpg';
import img3 from './pizza3.jpg';
import Producto from './Producto';
import FilaProductos from './FilaProductos';

const Promociones = (props) => {

    return (
        <> 
        <FilaProductos nombre="Promociones" onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} cart={props.cart} products={props.products}></FilaProductos>
        </>
    )
}

export default Promociones;