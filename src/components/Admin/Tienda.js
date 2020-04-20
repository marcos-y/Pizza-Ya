import React from 'react';
import './Tienda.css';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Pizzeria from '../Pizzeria';
import logo from '../logoContinental1.jpg';

const Tienda = () => {

    return (
        <>
            <div className="Tienda">
                <Pizzeria img={logo} nombre="La Continental"></Pizzeria>
                Tienda
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre de la tienda</Form.Label>
                        <Form.Control type="email" placeholder="Ej. La Continental" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="ej. 3416947080" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="email" placeholder="ej. San Juan 1000" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Horarios de atencion</Form.Label>
                        <Form.Control type="email" placeholder="ej. de 10:00  a 20:00 hs." />
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
                        <Form.Control as="select" multiple>
                            <option>Pizzas y Sandwiches</option>
                            <option>Empanadas</option>
                            <option>Picadas y Bebidas</option>
                            <option>Solo Bebidas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripciones extras</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </div>

        </>
    )
}

export default Tienda;