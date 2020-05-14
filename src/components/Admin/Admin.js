import React from 'react';
import logo from '../logoAzul.png';
import admin from '../Login/user.png';
import Button from 'react-bootstrap/Button';
import './Admin.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

import {
    Link,
} from "react-router-dom";

const Admin = () => {

    return (
        <>
            <div className="Header1">

                <img src={logo} alt="" className="logoheader" ></img>

                <div className="topright">
                    <img src={admin} alt="" width="50px" height="50px"></img>
                    <Link to="/">
                    <Button variant="primary">Cerrar sesion</Button>
                    </Link>
                </div>

            </div>

            
            <div className="menu">
                
                <Link to="/MisPromos">
                    <Button variant="info" id="botonGrande" size="lg">Mis promociones</Button>
                </Link>
                
                <Link to="/MisProductos">
                    <Button variant="success" id="botonGrande" size="lg">Mis productos</Button>
                </Link>

                <Link to="/MiTienda">
                    <Button variant="dark" size="lg">Mi Tienda</Button>
                </Link>
            </div>

        </>
    )
}

export default Admin;