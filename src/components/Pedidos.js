import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pedidos.css';
import FormCheck from 'react-bootstrap/FormCheck';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './Admin/Tabla.css';

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

    return (
        <>
             <Table className="tabla" responsive>
                <thead>
                    <tr>
                        <th>Min</th>
                        <th>estado1</th>
                        <th>entrega</th>
                        <th>Total</th>
                        <th>Paga</th>
                        <th>Telefono</th>
                        <th>Pedido</th>
                        <th>Chofer</th>
                        <th>Direccion</th>
                        <th>Llamar</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    { pedidos.map( pedido => { return(
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
                        <td>{pedido.estado}</td>
                    </tr>
                    )})
                    }
                </tbody>
            </Table>

        </>
    )
}

export default Pedidos;