import React from 'react';
import HeaderPedido from './HeaderPedido';
import './RetiroSucursal.css';
import Sucursal from './Sucursal';

const RetiroSucursal = () =>{

    return(
        <>
        <HeaderPedido></HeaderPedido>
        <div className="list">
            <h3>Seleccione una de nuestras sucursales</h3>
            <Sucursal></Sucursal>
            <Sucursal></Sucursal>
            <Sucursal></Sucursal>
        </div>
        
        </>
    )
}

export default RetiroSucursal;