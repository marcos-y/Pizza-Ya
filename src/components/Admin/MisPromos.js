import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './MisPromos.css';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {
    Link
} from 'react-router-dom';
import img1 from '../pizza1.jpg';
import img2 from '../empanada.png';
import img3 from '../hamburguesa2.png';
import img4 from '../postre.jpg';
import img5 from '../cerveza.jpg';

import icon from '../fork.png';
import icon2 from '../iconCerveza.png';
import icon3 from '../iconPostre.png';
import ProdAdmin from './ProdAdmin';

const MisPromos = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [productos, setProductos] = useState([]);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");

    const handleChangeNombre = event => setNombre(event.target.value);
    const handleChangeDescripcion = event => setDescripcion(event.target.value);
    const handleChangeCategoria = event => setCategoria(event.target.value);
    const handleChangePrecio = event => setPrecio(event.target.value);
    const handleChangeImagen = event => setImagen(event.target.files);

    const handleSubmit = () => {
        setShow(false);
        const producto = { nombre, descripcion, categoria, precio, imagen };
        setProductos([...productos, producto]);
        console.log(productos);
    }

    const promosAdmin = [
        {
            id: 1,
            nombre: "Promo1",
            imagen: img1,
            tipo: "Pizzas",
            icono: icon,
        },
        {
            id: 2,
            nombre: "Promo2",
            imagen: img1,
            tipo: "Pizzas",
            icono: icon,
        },
        {
            id: 3,
            nombre: "Promo3",
            imagen: img2,
            tipo: "Empanadas",
            icono: icon,
        },
        {
            id: 4,
            nombre: "Promo4",
            imagen: img3,
            tipo: "Hamburguesas",
            icono: icon
        },
        {
            id: 5,
            nombre: "Promo5",
            imagen: img5,
            tipo: "Bebidas",
            icono: icon2,
        },
        {
            id: 6,
            nombre: "Promo6",
            imagen: img4,
            tipo: "Postres",
            icono: icon3,
        },
    ]

    return (
        <>
            <div className="MisPromos">
                <h3>Mis Promociones</h3>
                <Button variant="success" className="botonverde2">Agregar nuevo producto</Button>
                <div className="hh">
                    <h3>Promociones visibles</h3>
                </div>


                <div>
                    {
                        promosAdmin.map(product => { return <ProdAdmin key={product.id} nombre={product.nombre} clase={product.tipo} img={product.imagen} icon={product.icono}></ProdAdmin> }
                        )
                    }
                </div>

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
                                    label="Custom file input"
                                    custom
                                    value={imagen} onChange={handleChangeImagen}
                                />
                            </Form>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>

                        <Link to="/MisProductos">
                            <Button variant="success" onClick={handleSubmit}>
                                Guardar
                        </Button>
                        </Link>

                        <Button variant="primary" onClick={handleClose}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>



            </div>

        </>
    )
}

export default MisPromos;