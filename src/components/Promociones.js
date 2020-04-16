import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Promociones.css'
import Button from 'react-bootstrap/Button'
import Title from './Title';
import './Promociones.css';
import img1 from './pizza1.jpg';
import img2 from './pizza2.jpg';
import img3 from './pizza3.jpg';

const Promociones = () => {

    return (
        <>
            <div className="Promociones">

                <>
                    <Title nombre="Promociones"></Title>
                </>

                <CardDeck className="carddeck">
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck className="carddeck">
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>


                <div className="boton">
                    <Button variant="dark">Ver todas las Promociones</Button>
                </div>
            </div>
        </>
    )
}

export default Promociones;