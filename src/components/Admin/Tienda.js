import React, { useState } from 'react'
import './Tienda.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Pizzeria from '../Pizzeria';
import logo from '../logoContinental1.jpg';

const Tienda = () => {

    const [tiendas, setTiendas] = useState([]);

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [horario, setHorario] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleChangeNombre = event => setNombre(event.target.value);
    const handleChangeTelefono = event => setTelefono(event.target.value);
    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangeDireccion = event => setDireccion(event.target.value);
    const handleChangeHorario = event => setHorario(event.target.value);
    const handleChangeCategoria = event => setCategoria(event.target.categoria);
    const handleChangeDescripcion = event => setDescripcion(event.target.value);

    const handleSubmit = () => {
        const tienda = { nombre, telefono, email, direccion, horario, categoria, descripcion };
        setTiendas([...tiendas, tienda]);
        console.log(tiendas);
    }

    return (
        <>
            <div className="Tienda">
                <Pizzeria img={logo} nombre="La Continental"></Pizzeria>
                Tienda
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre de la tienda</Form.Label>
                        <Form.Control type="text" placeholder="Ej. La Continental" onChange={handleChangeNombre} value={nombre} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="ej. 3416947080" onChange={handleChangeTelefono} value={telefono} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={handleChangeEmail} value={email} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="ej. San Juan 1000" onChange={handleChangeDireccion} value={direccion} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Horarios de atencion</Form.Label>
                        <Form.Control type="text" placeholder="ej. de 10:00  a 20:00 hs." onChange={handleChangeHorario} value={horario} />
                    </Form.Group>

                    <label htmlFor="basic-url">Logo (Subir imagen)</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <Button variant="outline-secondary">Subir</Button>
                            <Button variant="outline-secondary">Browse</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>


                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select" multiple onChange={handleChangeCategoria} value={categoria}>
                            <option>Pizzas y Sandwiches</option>
                            <option>Empanadas</option>
                            <option>Picadas y Bebidas</option>
                            <option>Solo Bebidas</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Con Delivery" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1" onChange={handleChangeDescripcion} value={descripcion}>
                        <Form.Label>Descripciones extras</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={handleSubmit}>Guardar cambios</Button>
            </div>

        </>
    )
}

export default Tienda;