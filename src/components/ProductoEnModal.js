import React, { useState } from 'react';
import imagen from './pizza1.jpg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './ProductoEnModal.css';

const ProductoModal = (props) => {


    return (
        <>
            <div>

                {props.cart && props.cart.length > 0 ? (
                    <ul>
                        {props.cart.map(product => {
                            return (

                                <div className="ProductoModal">

                                    <img src={imagen} className="imagen"></img>

                                    <div className="info">
                                        <h6>{product.product}</h6>
                                        <h6>${product.stock}</h6>

                                        <div className="botonComprar">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <Button variant="light" className="boton4" onClick={() => props.onAddQuant(product, "add")} >+</Button>
                                                </InputGroup.Prepend>
                                                
                                                <FormControl aria-describedby="basic-addon1" placeholder={product.quantity}
                                                    aria-label="Recipient's username" />
                                               
                                                <InputGroup.Prepend>
                                                    <Button variant="light" className="boton4" onClick={() => props.onAddQuant(product, "remove")} >-</Button>
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                        </div>

                                    </div>
                                </div>
                               

                            );
                        })}
                    </ul>
                ) : (
                        <p>No products on cart</p>
                    )}
            </div>


        </>
    )
}

export default ProductoModal;

