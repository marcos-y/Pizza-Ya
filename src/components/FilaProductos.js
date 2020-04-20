import React from 'react';
import './FilaProductos.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Promociones.css'
import Button from 'react-bootstrap/Button'
import Title from './Title';
import './Promociones.css';
import img1 from './pizza1.jpg';
import img2 from './pizza2.jpg';
import img3 from './pizza3.jpg';
import Producto from './Producto.js';

const FilaProductos = () => {

    return (
        <>
            <div className="Promociones">

                <>
                    <Title nombre="Pizzas"></Title>
                </>

                <CardDeck className="carddeck">
                    <Producto></Producto>
                    <Producto></Producto>
                    <Producto></Producto>
                </CardDeck>

                <CardDeck className="carddeck">
                    <Producto></Producto>
                    <Producto></Producto>
                    <Producto></Producto>
                </CardDeck>

            </div>
        </>
    )
}

export default FilaProductos;