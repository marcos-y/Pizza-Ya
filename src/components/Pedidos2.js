import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pedidos.css';
import FormCheck from 'react-bootstrap/FormCheck';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Admin/Tabla.css';
import {
    Link,
} from "react-router-dom";

const Pedidos2 = () => {

    const [pedidos,setPedidos] = useState([
        {
            nropedido: 0,
            horaIngreso: '19:00',
            descripcion: 'pizza napolitana',
            estado: 'pendiente',
        },
        {
            nropedido: 1,
            horaIngreso: '22:30',
            descripcion: 'pizza napolitana con papas y cerveza',
            estado: 'hecho',
        },

        {
            nropedido: 2,
            horaIngreso: '20:00',
            descripcion: 'pizza napolitana con postre',
            estado: 'hecho',
        },
        {
            nropedido: 3,
            horaIngreso: '21:45',
            descripcion: 'pizza de pollo',
            estado: 'pendiente',
        },
        {
            nropedido: 4,
            horaIngreso: '22:00',
            descripcion: 'promo 1',
            estado: 'pendiente',
        },
        {
            nropedido: 5,
            horaIngreso: '22:15',
            descripcion: 'pizza especial',
            estado: 'pendiente',
        }
    ])

    const handleEstado = (prop) =>{
      const pedido1 = pedidos.find(pedido => (pedido.nropedido == prop));
      const nro = pedido1.nropedido;

      /*CAMBIO EL ESTADO*/
      if(pedidos[nro].estado === 'pendiente')
       {  
        const newArray = [...pedidos];
        const state = 'hecho';
        newArray[nro].estado=state;
        setPedidos(newArray);

       } else 
       {if(pedidos[nro].estado === 'hecho')
       {
        const newArray = [...pedidos];
        const state = 'pendiente';
        newArray[nro].estado=state;
        setPedidos(newArray);
       }
        }
    }

    return (
        <>
             <Table className="tabla" responsive>
                <thead>
                    <tr>
                        <th>Nro de pedido</th>
                        <th>Hora de ingreso</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                        <th>Ver detalle</th>
                        <th>Cambiar estado</th> 
                    </tr>
                </thead>
                <tbody>
                    { pedidos.map( pedido => { return( 
                    <tr key={pedido.nropedido}>
                        <td>{pedido.nropedido}</td>
                        <td>{pedido.horaIngreso}</td>
                        <td>{pedido.descripcion}</td>
                        <td>{pedido.estado}</td>
                        <td ><Link to="Pedidos">Ver detalle</Link></td>
                        <td><Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="" onClick={() => handleEstado(pedido.nropedido) }/>
                        </Form.Group></td>
                    </tr>
                    )})
                    }
                </tbody>
            </Table>

        </>
    )
}

export default Pedidos2;