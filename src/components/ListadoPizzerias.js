import React from 'react';
import Pizzeria from './Pizzeria';
import './ListadoPizzerias.css';

const ListadoPizzerias = (props) =>{

    return(
        <>
            <div>
                {
                    props.listadoPizzerias.map(pizzeria =>{return <Pizzeria key={pizzeria.id}  nombre={pizzeria.nombre} img={pizzeria.imagen} ></Pizzeria> } )
                }
            </div>
           
        </>)
}

export default ListadoPizzerias;