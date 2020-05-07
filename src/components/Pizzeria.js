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
            <div className="pizzeria">

                <div className="imglogo">
                    <img src={props.img} alt="" className="logo"></img>
                    <div className="descripcion">
                        <div className="clase">
                            <img src={fork} alt="" className="fork"></img>
                            <h6>Pizzas</h6>
                        </div>
                       
                        <h5>{props.nombre}</h5>
                        <h7>Pizzas</h7>
                        <h7>Precios desde</h7>
                        <h7>Envio:$20.00</h7>
                    </div>
                </div>

                <div className="boton8">
                    <Link className="btn btn-outline-success" to={`/Pizzeria1/${(props.nombre)}`}>
                        Ver productos
                    </Link>
                </div>
    
                
            </div>


        </>
    )
}

export default Pizzeria;