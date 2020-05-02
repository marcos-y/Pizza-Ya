import React from 'react';
import Pizzeria from './Pizzeria';

const ListadoPizzerias = (props) =>{

    return(
        <>
            <div>
                {
                    props.listadoPizzerias.map(pizzeria =>{return <Pizzeria  nombre={pizzeria.nombre} img={pizzeria.imagen}  ></Pizzeria>   } )
                }
            </div>
           
        </>)
}

export default ListadoPizzerias;