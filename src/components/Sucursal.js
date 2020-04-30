import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    Link 
}
from 'react-router-dom';

import './Sucursal.css';
import logoContinental from './logoContinental1.jpg';
import fork from './fork.png';

const Sucursal = () => {

    return (
        <>
            <div className="Pizzeria">

                <div className="imglogo">
                    <img src={logoContinental} alt="" className="logo"></img>
                    <div className="descripcion">
                        <div className="clase">
                            <img src="https://cdn.icon-icons.com/icons2/606/PNG/512/store_icon-icons.com_56116.png" alt="" className="fork"></img>
                            <h6>sucursales</h6>
                        </div>

                        <h3>Entre rios 415</h3>
                        <h7>Avenida Entre Rios 415</h7>
                        <h7>Tel. +54 11 2345425</h7>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Sucursal;