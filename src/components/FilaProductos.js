import React from 'react';
import './FilaProductos.css';
import CardDeck from 'react-bootstrap/CardDeck';
import './Promociones.css'
import Title from './Title';
import './Promociones.css';
import img1 from './pizza1.jpg';
import img2 from './pizza2.jpg';
import img3 from './pizza3.jpg';
import Producto from './Producto.js';

const FilaProductos = (props) => {

    return (
        <>
            <div className="Promociones">

                <Title nombre={props.nombre}></Title>

                {/*-----PRODUCT LIST -------- */}
                <div className="carddeck" >
                    { 
                    props.products && props.products.map(product=>{ return <Producto key={product.id} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} product={JSON.stringify(product)} nombre={product.product} cart={props.cart}></Producto>
                    })
                    }
                </div>
                    
                {/* ------Fila PRODUCTOS
                <CardDeck className="carddeck">
                    <Producto onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} products={props.products}></Producto>
                    <Producto onAddToCart={props.onAddToCart} products={props.products}></Producto>
                    <Producto onAddToCart={props.onAddToCart} products={props.products}></Producto>
                </CardDeck>
                */ }

            </div>
        </>
    )
}

export default FilaProductos;