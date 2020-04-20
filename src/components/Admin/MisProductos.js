import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import './MisProductos.css';
import ProdAdmin from './ProdAdmin';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';


import {
    Link
} from "react-router-dom";

const MisProductos = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <div className="MisProductos">
                <h3>Mis Productos</h3>
                <Button variant="outline-success" onClick={handleShow}>Agregar nuevo producto</Button>
                <div className="h">
                    <h3>Productos visibles</h3>
                </div>
               

            </div>
            
          
           

            <ProdAdmin nombre="Super Pizza" clase="Pizzas"></ProdAdmin>
            <ProdAdmin nombre="Super Pizza" clase="Pizzas"></ProdAdmin>
            <ProdAdmin nombre="Super Pizza" clase="Empanadas"></ProdAdmin>
            <ProdAdmin nombre="Super Pizza" clase="Hamburguesas"></ProdAdmin>
            <ProdAdmin nombre="Super Pizza" clase="Bebidas"></ProdAdmin>
            <ProdAdmin nombre="Super Pizza" clase="Postres"></ProdAdmin>





            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar producto</Modal.Title>
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

export default MisProductos;