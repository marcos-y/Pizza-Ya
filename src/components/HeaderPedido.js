import React, { useState } from 'react';
import './HeaderPedido.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup';
import {
    Link
} from "react-router-dom";


const HeaderPedido = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <div className="botons">
                    <Button variant="dark" onClick={handleShow}>Ingresar</Button>
                    <Button variant="dark" onClick={handleShow}>Registrar</Button>
                </div>
            </header>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresar a mi cuenta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                                
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Link to="">
                        <h6 className="contraseña">Olvide mi contraseña</h6>
                        <Button variant="danger" type="submit">
                            Ingresar
                        </Button>
                        </Link>
                    </Form>
                    <Link to="">
                    <h7>Primera vez que ingreso</h7>
                    </Link>
                </Modal.Body>
        
            </Modal>
        </>
    )
}

export default HeaderPedido;