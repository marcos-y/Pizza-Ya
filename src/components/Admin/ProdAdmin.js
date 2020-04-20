import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";

import fork from '../fork.png';
import './ProdAdmin.css';

import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';



const ProdAdmin = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="ProdAdmin">

                <div className="imglogo">
                    <img src={props.img} className="logo"></img>
                    <div className="descripcion">
                        <div className="clase">
                            <img src={props.icon} className="fork"></img>
                            <h6>{props.clase}</h6>
                        </div>

                        <h3>{props.nombre}</h3>
                        <h7>Pizzas</h7>
                        <h7>Precios desde</h7>
                        <h7>Envio:$20.00</h7>
                    </div>
                </div>

                <div className="boton1">
                    <Button variant="danger" size="sm">Ocultar</Button>
                    <Button variant="info" size="sm" className="botonAzul"onClick={handleShow}>Editar</Button>
                </div>

            </div>


           {/* MODAAL */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label htmlFor="basic-url">Nombre</label>

                    <div className="form1">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nombre"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </div>

                    <label htmlFor="basic-url">Descripcion</label>
                    <div className="form1">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Descripcion"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </div>

                    <label htmlFor="basic-url">Categoria</label>
                    <div className="form1">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Categoria"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </div>


                    <label htmlFor="basic-url">Precio</label>
                    <div className="form1">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Precio"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </div>


                    <label htmlFor="basic-url">Imagen:</label>
                    <div className="form1">

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <Button variant="outline-secondary">Subir</Button>
                                <Button variant="outline-secondary">Browse</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" />
                        </InputGroup>
                    </div>

                </Modal.Body>

                <Modal.Footer>

                    <Link to="/Admin">
                        <Button variant="success" onClick={handleClose}>
                            Guardar
                        </Button>
                    </Link>

                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                        </Button>

                </Modal.Footer>
            </Modal>



        </>
    )
}

export default ProdAdmin;