import React, { useState } from 'react';
import './HeaderPedido.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import {
    Link
} from "react-router-dom";


const HeaderPedido = () => {

    const props1 = {
        nombre:"Ingresar",
        olvideContra:"Olvide mi contraseña",
        primVez:"Primera vez que ingreso",
    }

    const props2 = {
        nombre:"Registrar",
        olvideContra:"",
        primVez:"",
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [loginType, setloginType] = useState("");
    const [primeraVez, setPrimeraVez] = useState("");
    const [olvideCont, setOlvideCont] = useState("");

    const handleShow = (type) => {
        setloginType(type.nombre);
        setOlvideCont(type.olvideContra)
        setPrimeraVez(type.primVez)
        setShow(true);
    }
    
    return (
        <>
            <header>
                <div className="botons">
                    <Button variant="dark"  onClick={() => handleShow(props1)}>Ingresar</Button>
                    <Button variant="dark"  onClick={() => handleShow(props2)}>Registrar</Button>
                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{loginType}</Modal.Title>
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
                        <h6 className="contraseña">{olvideCont}</h6>
                        <Button variant="danger" type="submit">
                            {loginType}
                        </Button>
                        </Link>
                    </Form>
                    <Link to="">
                    <h7>{primeraVez}</h7>
                    </Link>
                </Modal.Body>
        
            </Modal>
        </>
    )
}

export default HeaderPedido;