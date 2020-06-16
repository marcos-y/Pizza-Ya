import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pedidos.css';
import FormCheck from 'react-bootstrap/FormCheck';
import Form from 'react-bootstrap/Form';

const Pedidos = () => {

    const pedidos = [
        {
            min: -235,
            estado1: "p",
            entrega: "07:30",
            total: 2100,
            paga: 2100,
            telefono: "381236523",
            nropedido: 1,
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
            nropedido: 2,
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
            nropedido: 3,
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
            nropedido: 4,
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
            nropedido: 5,
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
            nropedido: 6,
            chofer: 4,
            direccion: "san juan 3000",
            llamar: "38155435",
            estado: "pendiente",
            /*
            detalle:"Empanadas",
            fecha:"23/05/2020",
            cliente:"lucas" */
        }
    ]

    const [estadoPedido, setEstadoPedido] = useState("");

    const handleEstado = (nro) => {
        const buscaPedidos = pedidos.find(pedido1 => pedido1.nropedido === nro);
        console.log(buscaPedidos);
        if (buscaPedidos.nropedido === nro) {
            if (buscaPedidos.estado1 === "c") {

                pedidos[nro].estado1 = "p";
                console.log(1);
                console.log(pedidos[nro].estado1);
            }
            else if (buscaPedidos.estado1 === "p") {
                console.log(2);
                pedidos[nro].estado1 = "c";
                console.log(pedidos[nro].estado1);
            }
        }
        window.location.reload(false);
    }


    return (
        <>
            <div className="Lista">
                <ListGroup.Item className="item" action variant="primary">Min:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estado: &nbsp;&nbsp;&nbsp; Entrega &nbsp;&nbsp;&nbsp; Total&nbsp;&nbsp;&nbsp; Paga&nbsp;&nbsp;&nbsp; Telefono &nbsp;&nbsp;&nbsp;Numero &nbsp; Pedido &nbsp;&nbsp;&nbsp;  Chofer &nbsp;&nbsp;&nbsp;  Direccion&nbsp;&nbsp;&nbsp; Confirm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ListGroup.Item>
                {
                    pedidos.map(pedido => {
                        if (pedido.estado1 === "c") {
                            return <ListGroup.Item className="item" key={pedido.nropedido} action variant="primary"><p>{pedido.min} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pedido.estado1}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pedido.entrega} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pedido.total} &nbsp;&nbsp;&nbsp;{pedido.paga} &nbsp;&nbsp;&nbsp;{pedido.telefono} &nbsp;&nbsp;&nbsp; {pedido.nropedido}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{pedido.chofer} &nbsp;&nbsp;&nbsp;{pedido.direccion} &nbsp;&nbsp;&nbsp; 
                             </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="" />
                            </Form.Group> <span className="badge badge-primary badge-pill" onClick={() => handleEstado(pedido.nropedido)}>Marcar como pendiente</span></ListGroup.Item>
                        }
                        else if (pedido.estado1 === "p") {
                            return <ListGroup.Item className="item" key={pedido.nropedido} action variant="danger"><p>{pedido.min} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pedido.estado1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{pedido.entrega}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {pedido.total}&nbsp;&nbsp;&nbsp; {pedido.paga}&nbsp; &nbsp;&nbsp;{pedido.telefono} &nbsp;&nbsp;&nbsp; {pedido.nropedido} &nbsp;&nbsp;&nbsp;{pedido.chofer} &nbsp;&nbsp;&nbsp;{pedido.direccion}</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                           <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="" />
                                </Form.Group><span className="badge badge-primary badge-pill" onClick={() => handleEstado(pedido.nropedido)}>Marcar como hecho</span></ListGroup.Item>
                        }
                    })
                }
            </div>
        </>
    )
}

export default Pedidos;