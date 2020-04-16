import React from 'react';
import logo from './logoAzul.png';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {

    return (
        <>
            <div className="Header">
                <img src={logo} className="logo1"></img>
                <Navbar bg="light" variant="light" expand="lg">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Productos</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Bebidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Postres</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>


    )
}

export default Header;