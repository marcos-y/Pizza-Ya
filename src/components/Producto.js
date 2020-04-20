import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from './pizza1.jpg';
import './Producto.css';

const Producto = () => {

    return (
        <>
            <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                    <div className="boton2">
                    <Button variant="outline-info">Agregar al pedido</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Producto;