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

const Admin = (props) => {

    return (
        <>
            <div className="Header1">

                <img src={logo} alt="" className="logoheader" ></img>

                <div className="topright">
                    <img src={admin} alt="" width="50px" height="50px"></img>
                    <Link to="/">
                    <Button variant="primary">Cerrar sesion</Button>
                    </Link>
                    
                    {/* ACA ENTRA EL NOMBRE DEL USER POR PROPS.USER*/}
                   <h6>{props.user}</h6>
                </div>

            </div>

            
            <div className="menu">
                
                <Link to="/MisPromos">
                    <Button variant="info" size="lg">Mis promociones</Button>
                </Link>
                
                <Link to="/MisProductos">
                    <Button variant="success" size="lg">Mis productos</Button>
                </Link>

                <Link to="/MiTienda">
                    <Button variant="dark" size="lg" id="botonGris">Mi Tienda</Button>
                </Link>

                <Link to="/Pedidos">
                    <Button variant="dark"  size="lg" id="botonGris">Pedidos</Button>
                </Link>
            
            </div>

        </>
    )
}

export default Admin;