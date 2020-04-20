import React from 'react';
import logo from '../logoAzul.png';
import admin from '../Login/user.png';
import Button from 'react-bootstrap/Button';
import './Admin.css';

import {
    Link,
  } from "react-router-dom";

const Admin = () => {

    return (
        <>
            <div className="Header">
                
                <img src={logo} className="logo1"></img>
                
                <div className="buton">
                    <img src={admin} width="50px" height="50px"></img>
                    <Button variant="primary">Cerrar sesion</Button>
                </div>
            </div>
            
            <br></br>
            <br></br>
            <div className="menu">
                <Link to="/MiTienda">
                <Button variant="info" size="lg">Mi tienda</Button>
                </Link>
                <Link to="/MisProductos">
                <Button variant="success" size="lg">Mis productos</Button>
                </Link>
            </div>
          

            <div className="submenu">
                <Button variant="warning">Cerrar tienda</Button>
                <Button variant="warning">Copiar mensajes para clientes</Button>
                <Link to="/Banners">
                <Button variant="warning">Mis banners</Button>
                </Link>
            </div>
            
            
            
        </>
    )
}

export default Admin;