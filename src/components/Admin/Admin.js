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
                    <Button variant="info" size="lg">Mi tienda</Button>
                </Link>
                <Link to="/MisProductos">
                    <Button variant="success" size="lg">Mis productos</Button>
                </Link>
                
            
                <Navbar bg="light" variant="light" expand="lg">
                    <Link to="/">
                        <Navbar.Brand ></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link >Cerrar tienda</Nav.Link>
                            <Nav.Link >Copiar mensajes para clientes</Nav.Link>
                            <Link to="/Banners" className="nav-link">
                            Mis banners
                            </Link>
                            <Link to="/MisPromos" className="nav-link">
                                Mis promociones
                            </Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>

            </div>

        </>
    )
}

export default Admin;