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
                <Link to="/MiTienda">
                    <Button variant="info" id="botonGrande" size="lg">Mi tienda</Button>
                </Link>
                <Link to="/MisProductos">
                    <Button variant="success" id="botonGrande" size="lg">Mis productos</Button>
                </Link>
                

                <Navbar bg="light" variant="light" expand="lg" id="navb">
                    <Link to="/">
                        <Navbar.Brand ></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Button variant="light" id="navb">Cerrar tienda</Button>
                            <Button variant="light" id="navb">Copiar mensajes para clientes</Button>
                            <Link to="/Banners" >
                            <Button variant="light" id="navb">Banners</Button>
                            </Link>
                            <Link to="/MisPromos" >
                            <Button variant="light" id="navb">Mis promociones</Button>
                            </Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>

            </div>

        </>
    )
}

export default Admin;