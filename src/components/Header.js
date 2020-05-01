import React, { useState} from 'react';
import logo from './logoAzul.png';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

import ico1 from './Login/user.png';
import ico2 from './Login/pass.png';

import {
    Link
} from "react-router-dom";

const Header = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>  setShow(true);

    const[password,setPassword] = useState("");
    const[user,setUser] = useState("");
    const [users,setUsers] = useState([]);

    const handleChangePassword = event => setPassword(event.target.value);
    const handleChangeUser = event => setUser(event.target.value);

    const handleSubmit = () =>{
        const usuario = {user,password};
        setUsers([...users,usuario]);
        console.log(users);
        setShow(false);  
    }



    return (
        <>
            <div className="Header">
                <img src={logo} alt="" className="logo1"></img>
                <Navbar bg="light" variant="light" expand="lg">
                    <Link to="/">
                        <Navbar.Brand>Home</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>Productos</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <Link to="/Bebidas">
                                    <NavDropdown.Item href="#action/3.1">Bebidas</NavDropdown.Item>
                                </Link>
                                <Link to="Postres">
                                    <NavDropdown.Item href="#action/3.2">Postres</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                                <Nav.Link onClick={handleShow}>Admin</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                            <Button variant="light" className="boton3" onClick={handleShow}>Iniciar sesion</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                 {/*MODAL DEL CLIENTE */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>LogIn</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label htmlFor="basic-url">Usuario</label>

                        <div className="form1">
                            <img src={ico1} alt="" width="40px" height="40px"></img>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={handleChangeUser}
                                    value={user}
                                />
                            </InputGroup>
                        </div>

                        <label htmlFor="basic-url">Clave</label>
                        <div className="form1">
                             <img src={ico2} alt="" width="40px" height="40px"></img>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Password"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={handleChangePassword}
                                    value={password}
                                />
                            </InputGroup>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>

                        <Link to='/Admin'>
                        <Button variant="outline-primary" onClick={handleSubmit}>
                            Ingresar
                        </Button>
                        </Link>

                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>


            </div>
        </>


    )
}

export default Header;