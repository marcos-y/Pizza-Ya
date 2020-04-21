import React from 'react';
import logo from '../logoAzul.png';
import admin from '../Login/user.png';
import Button from 'react-bootstrap/Button';
import './Admin.css';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {
    Link,
} from "react-router-dom";

const Admin = () => {

    return (
        <>
            <div className="Header1">

                <img src={logo} className="logoheader"></img>

                <div className="topright">
                    <img src={admin} width="50px" height="50px"></img>
                    <Link to="/">
                    <Button variant="primary">Cerrar sesion</Button>
                    </Link>
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
                
                <br></br>
                <br></br>
                <Navbar bg="light" variant="light" expand="lg">
                    <Link to="/">
                        <Navbar.Brand href="#home"></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Cerrar tienda</Nav.Link>
                            <Nav.Link href="#home">Copiar mensajes para clientes</Nav.Link>
                            <Link to="/Banners">
                            <Nav.Link href="#home">Mis banners</Nav.Link>
                            </Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>

            </div>

        </>
    )
}

export default Admin;