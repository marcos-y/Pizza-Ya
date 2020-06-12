import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pedidos.css';

const Pedidos = () => {

    const pedidos = [
        {
            nropedido:1,
            detalle:"Pizza",
            estado:"hecho",
            fecha:"22/05/2020",
            cliente:"juan"
        },
        {
            nropedido:2,
            detalle:"Pizza jamon",
            estado:"pendiente",
            fecha:"23/05/2020",
            cliente:"jose"
        },
        {
            nropedido:3,
            detalle:"Empanadas",
            estado:"pendiente",
            fecha:"23/05/2020",
            cliente:"lucas"
        },
        {
            nropedido:4,
            detalle:"Empanadas",
            estado:"pendiente",
            fecha:"23/05/2020",
            cliente:"lucas"
        },
        {
            nropedido:5,
            detalle:"Empanadas",
            estado:"pendiente",
            fecha:"23/05/2020",
            cliente:"lucas"
        }
    ]

    const [estadoPedido, setEstadoPedido] = useState("");

    const handleEstado = (nro) =>{
       const buscaPedidos = pedidos.find(pedido1 => pedido1.nropedido === nro);
       console.log(buscaPedidos);
        if(buscaPedidos.nropedido === nro)
        {
            if (buscaPedidos.estado === "hecho")
            {
        
                pedidos[nro].estado = "pendiente";
                console.log(1);
                console.log(pedidos[nro].estado);
            }
            else if(buscaPedidos.estado === "pendiente")
            {
                console.log(2);
                pedidos[nro].estado = "hecho";
                console.log(pedidos[nro].estado);
            }
        }
        window.location.reload(false);
    }
    

    return (
        <>
            <div className="ListGroup">
                {
                    pedidos.map(pedido=>{
                        if(pedido.estado ==="hecho")
                        {
                        return <ListGroup.Item key={pedido.nropedido} action variant="primary">Numero pedido: {pedido.nropedido} Detalle: {pedido.detalle} Estado: {pedido.estado} Fecha: {pedido.fecha} Cliente: {pedido.cliente}  <span className="badge badge-primary badge-pill" onClick={() => handleEstado(pedido.nropedido)}>Marcar como pendiente</span></ListGroup.Item> 
                        }
                       else if(pedido.estado ==="pendiente")
                       {
                           return <ListGroup.Item key={pedido.nropedido} action variant="danger">Numero pedido: {pedido.nropedido} Detalle: {pedido.detalle} Estado: {pedido.estado} Fecha: {pedido.fecha} Cliente: {pedido.cliente}  <span className="badge badge-primary badge-pill" onClick={()=>handleEstado(pedido.nropedido)}>Marcar como hecho</span></ListGroup.Item> 
                       }
                    })
                }
            </div>
        </>
    )
}

export default Pedidos;