import React, { useState } from 'react';
import icon1 from './facebook.png';
import icon2 from './whats.png';
import icon3 from './ig.png';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './Footer.css';


const Footer = () => {

    const [mensajes, setMensajes] = useState([]);
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mail, setMail] = useState("");

    const handleChangeNombre = event => setNombre(event.target.value);
    const handleChangeMensaje = event => setMensaje(event.target.value);
    const handleChangeMail = event => setMail(event.target.value)

    const handleSubmit = () => {
        const mensajeItem = { nombre, mail, mensaje };
        setMensajes([...mensajes, mensajeItem]);
        console.log(mensajes);
    }

    return (
        <>

            <div className="footer">
                <div className="info2">
                    <h5>Telefono: +54 3416 324589</h5>
                    <h5>Email:PizzaYa@gmail.com</h5>
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3414451082!2d-65.20909168529616!3d-26.829090196182882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1114fb0a6b%3A0xdcd3498490d6cd31!2zR2FsZXLDrWEgU2FuIE1hcnTDrW4!5e0!3m2!1ses!2sar!4v1584109169344!5m2!1ses!2sar" width="300" height="300" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>


                <div className="forms">

                    <h3 className="titulo">Dejanos un mensaje</h3>
                    <label htmlFor="basic-url">Nombre</label>
                    <InputGroup>
                        <FormControl aria-describedby="basic-addon3" onChange={handleChangeNombre} value={nombre} />
                    </InputGroup>


                    <label htmlFor="basic-url" className="titulo">En que podemos ayudarte?</label>
                    <InputGroup >
                        <FormControl aria-describedby="basic-addon3" onChange={handleChangeMensaje} value={mensaje} />
                    </InputGroup>


                    <div className="mensaje">
                        <label htmlFor="basic-url">Email</label>
                        <InputGroup className="mb-3">
                            <FormControl aria-describedby="basic-addon3" onChange={handleChangeMail} value={mail}/>
                        </InputGroup>

                        <Button variant="light" >Enviar</Button>
                    </div>


                </div>


                <div className="mail">

                    <div className="comercios">
                        <h3 className="titulo">¿Queres adherir tu comercio?</h3>
                        <h5>Dejanos tu numero y nos contactaremos con vos</h5>
                        <InputGroup >
                            <FormControl aria-describedby="basic-addon3" />
                        </InputGroup>
                    </div>
                    <br></br>
                    <Button variant="light" onClick={handleSubmit} >Enviar</Button>


                    <div className="icons">
                        <img src={icon1} alt="" className="icon"></img>
                        <img src={icon2} alt="" className="icon"></img>
                        <img src={icon3} alt="" className="icon"></img>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;