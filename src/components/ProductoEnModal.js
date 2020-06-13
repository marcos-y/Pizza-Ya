import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './ProductoEnModal.css';
import icon3 from './bin.svg';

const ProductoModal = (props) => {

    return (
        <>
            <div>

                {props.cart && props.cart.length > 0 ? (
                    <ul>
                        {props.cart.map(product => {

                            if(product.quantity !=0)
                            {
                            return (

                                <div className="ProductoModal">

                                    <img src={product.img} alt="" className="imagen"></img>

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
                                    
                                    <div onClick={() => props.onAddQuant(product,"removeProd")}>
                                        <img src={icon3} width="50" height="50" className="icon3"></img>
                                    </div>
                                </div>
                               
                            );
                            }
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

