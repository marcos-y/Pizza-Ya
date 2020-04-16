import React from 'react';
import './Title.css';

const Title = (props) => {

    return (
        <>
            <div className="hrdiv">
                <hr />
                <h1 className="title">{props.nombre}</h1>
                <hr />
            </div>

        </>
    )
}

export default Title;