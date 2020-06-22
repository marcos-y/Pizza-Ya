import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pedidos.css';
import FormCheck from 'react-bootstrap/FormCheck';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './Admin/Tabla.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const Pedidos = () => {

    const [pedidos, setPedidos] = useState([
        {
            min: -235,
            estado1: "p",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 0,
            chofer: 4,
            direccion: "san juan 3000",
            llamar: "38155435",
            detalle: "Pizza",
            estado: "hecho",
            fecha: "22/05/2020",
            cliente: "juan"
        },
        {
            min: -199,
            estado1: "c",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 1,
            chofer: 4,
            direccion: "san juan 3000",
            llamar: "38155435",
            estado: "pendiente",
            /*
            detalle:"Pizza jamon",
            fecha:"23/05/2020",
            cliente:"jose" */
        },

        {
            min: -115,
            estado1: "c",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 2,
            chofer: 4,
            direccion: "san juan 3000",
            llamar: "38155435",
            estado: "pendiente",
            /*
            detalle:"Empanadas",
            fecha:"23/05/2020",
            cliente:"lucas"
            */
        },
        {
            min: 9,
            estado1: "c",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 3,
            direccion: "san juan 3000",
            llamar: "38155435",
            estado: "pendiente",
            /*
            detalle:"Empanadas",
            fecha:"23/05/2020",
            cliente:"lucas"*/
        },
        {
            min: 18,
            estado1: "c",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 4,
            chofer: 4,
            direccion: "san juan 3000",
            llamar: "38155435",
            estado: "pendiente",
            /*
            detalle:"Empanadas",
            fecha:"23/05/2020",
            cliente:"lucas" */
        },
        {
            min: 18,
            estado1: "p",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 5,
            chofer: 4,
            direccion: "san juan 3000",
            llamar: "38155435",
            estado: "pendiente",
            /*
            detalle:"Empanadas",
            fecha:"23/05/2020",
            cliente:"lucas" */
        }
    ])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    /*Envio al array modificacion del pedido*/
    const handleClose2 = () => {
        const pedido1 = pedidos.find(pedido => (pedido.nropedido == numeroPedido));
        const newArray = [...pedidos];

        newArray[numeroPedido].min = min;
        newArray[numeroPedido].entrega = entrega;
        newArray[numeroPedido].total = total;
        newArray[numeroPedido].paga = paga;
        newArray[numeroPedido].telefono = telefono;
        newArray[numeroPedido].chofer = chofer;
        newArray[numeroPedido].direccion = direccion;
        newArray[numeroPedido].llamar = llamar;
        newArray[numeroPedido].nropedido = pedido;

        setPedidos(newArray);
        setShow(false);
    }

    const [numeroPedido, setNumeroPedido] = useState(0);

    /*Abro el modal y busco numero del pedido*/
    const handleShow = (props) => {
        const pedido1 = pedidos.find(pedido => (pedido.nropedido == props.nropedido));
        const nro = pedido1.nropedido;

        setMin(props.min);
        setEntrega(props.entrega);
        setTotal(props.total);
        setPaga(props.paga);
        setTelefono(props.telefono);
        setChofer(props.chofer);
        setDireccion(props.direccion);
        setLlamar(props.llamar);
        setPedido(props.nropedido);

        setNumeroPedido(nro);
        setShow(true);
    }

    const [min, setMin] = useState('');
    const [entrega, setEntrega] = useState('');
    const [total, setTotal] = useState(0);
    const [paga, setPaga] = useState(0);
    const [telefono, setTelefono] = useState('');
    const [pedido, setPedido] = useState(0);
    const [chofer, setChofer] = useState('');
    const [direccion, setDireccion] = useState('');
    const [llamar, setLlamar] = useState('');


    const handleChangeMin = event => setMin(event.target.value);
    const handleChangeEntrega = event => setEntrega(event.target.value);
    const handleChangeTotal = event => setTotal(event.target.value);
    const handleChangePaga = event => setPaga(event.target.value);
    const handleChangeTelefono = event => setTelefono(event.target.value);
    const handleChangeChofer = event => setChofer(event.target.value);
    const handleChangeDireccion = event => setDireccion(event.target.value);
    const handleChangeLlamar = event => setLlamar(event.target.value);
    const handleChangeNroPedido = event => setPedido(event.target.value);



    return (
        <>
            <Table className="tabla" responsive>
                <thead>
                    <tr>
                        <th>Min</th>
                        <th>estado</th>
                        <th>entrega</th>
                        <th>Total</th>
                        <th>Paga</th>
                        <th>Telefono</th>
                        <th>Pedido</th>
                        <th>Chofer</th>
                        <th>Direccion</th>
                        <th>Llamar</th>
                        <th>Actualizar</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido => {
                        return (
                            <tr>
                                <td>{pedido.min}</td>
                                <td>{pedido.estado1}</td>
                                <td>{pedido.entrega}</td>
                                <td>{pedido.total}</td>
                                <td>{pedido.paga}</td>
                                <td>{pedido.telefono}</td>
                                <td>{pedido.nropedido}</td>
                                <td>{pedido.chofer}</td>
                                <td>{pedido.direccion}</td>
                                <td>{pedido.llamar}</td>
                                <td><Button variant="primary" size="sm" onClick={() => handleShow(pedido)}>Actualizar</Button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Min</Form.Label>
                        <Form.Control type="text" placeholder={min} onChange={handleChangeMin} value={min} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Entrega</Form.Label>
                        <Form.Control type="text" placeholder="Entrega" onChange={handleChangeEntrega} value={entrega} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Total</Form.Label>
                        <Form.Control type="text" placeholder="Total" onChange={handleChangeTotal} value={total} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Paga</Form.Label>
                        <Form.Control type="text" placeholder="Paga" onChange={handleChangePaga} value={paga} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" onChange={handleChangeTelefono} value={telefono} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nro pedido</Form.Label>
                        <Form.Control type="text" placeholder="Nro pedido" onChange={handleChangeNroPedido} value={pedido} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Chofer</Form.Label>
                        <Form.Control type="text" placeholder="Chofer" onChange={handleChangeChofer} value={chofer} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Direccion" onChange={handleChangeDireccion} value={direccion} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Llamar</Form.Label>
                        <Form.Control type="text" placeholder="Llamar" onChange={handleChangeLlamar} value={llamar} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Pedidos;