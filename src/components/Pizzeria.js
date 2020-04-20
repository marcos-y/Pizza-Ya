import React from 'react';
import fork from './fork.png';
import './Pizzeria.css';
import Button from 'react-bootstrap/Button';
import {
    Link
  } from "react-router-dom";


const Pizzeria = (props) => {

    return (
        <>
            <div className="Pizzeria">

                <div className="imglogo">
                    <img src={props.img} className="logo"></img>
                    <div className="descripcion">
                        <div className="clase">
                            <img src={fork} className="fork"></img>
                            <h6>Pizzas</h6>
                        </div>
                       
                        <h3>{props.nombre}</h3>
                        <h7>Pizzas</h7>
                        <h7>Precios desde</h7>
                        <h7>Envio:$20.00</h7>
                    </div>
                </div>

                <div className="boton1">
                    <Link to="Productos">
                        <Button variant="outline-success">Ver productos</Button>
                    </Link>
                </div>

            </div>


        </>
    )
}

export default Pizzeria;