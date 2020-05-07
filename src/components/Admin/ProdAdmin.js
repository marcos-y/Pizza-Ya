import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import './ProdAdmin.css';

import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';



const ProdAdmin = (props) => {

    const [productos, setProductos] = useState([]);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen,setImagen] = useState("");

    const handleChangeNombre = event => setNombre(event.target.value);
    const handleChangeDescripcion = event => setDescripcion(event.target.value);
    const handleChangeCategoria = event => setCategoria(event.target.value);
    const handleChangePrecio = event => setPrecio(event.target.value);
    const handleChangeImagen = event => setImagen(event.target.value);

    const handleSubmit = () => {
        setShow(false);
        const producto = { nombre, descripcion, categoria, precio,imagen };
        setProductos([...productos, producto]);
        console.log(productos);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="ProdAdmin">

                <div className="imglogo">
                    <img src={props.img} alt="" className="logo"></img>
                    <div className="descripcion">
                        <div className="clase">
                            <img src={props.icon} alt="" className="fork"></img>
                            <h6>{props.clase}</h6>
                        </div>

                        <h3>{props.nombre}</h3>
                        <h7>Pizzas</h7>
                        <h7>Precios desde</h7>
                        <h7>Envio:$20.00</h7>
                    </div>
                </div>

                <div className="boton3">
                    <Button variant="danger" size="sm">Ocultar</Button>
                    <Button variant="info" size="sm" onClick={handleShow}>Editar</Button>
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
                                onChange={handleChangeNombre}
                                value={nombre}
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
                                onChange={handleChangeDescripcion}
                                value={descripcion}
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
                                onChange={handleChangeCategoria}
                                value={categoria}
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
                                onChange={handleChangePrecio}
                                value={precio}
                            />
                        </InputGroup>

                    </div>


                    <label htmlFor="basic-url">Imagen:</label>
                    <div className="form1">
                        <Form>
                            <Form.File
                                id="custom-file"
                                label="Subir imagen"
                                onChange={handleChangeImagen}
                                defaultValue={imagen}
                            />
                        </Form>
                    </div>

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="success" onClick={handleSubmit}>
                        Guardar
                        </Button>

                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                        </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProdAdmin;