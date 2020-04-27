import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel1.css'
import img1 from './pizza_hut.jpg';


const Carousel1 = () => {

    return (
        <>
        <br></br>
        <br></br>
        <div className="Carousel1">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1} 
                        alt=""
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1} 
                        alt=""
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt=""
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default Carousel1;