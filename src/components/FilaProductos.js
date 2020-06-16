import React, {useEffect} from 'react';
import './FilaProductos.css';
import './Promociones.css'
import Title from './Title';
import './Promociones.css';
import Producto from './Producto.js';

const FilaProductos = (props) => {

    useEffect(()=> {
        window.scrollTo(0,0)
    }
    ,[])

    return (
        <>
            <div className="Promociones">

                <Title nombre={props.nombre}></Title>

                {/*-----PRODUCT LIST -------- */}
                <div className="carddeck" >
                    { 
                    props.promos && props.promos.map(product=>{ return <Producto key={product.id} cantidad={props.cantidad} addTotal={props.addTotal} total={props.total} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} product={JSON.stringify(product)} stock={product.stock} nombre={product.product} cart={props.cart} img={product.img}></Producto>
                    
                    })
                    }
                    { 
                    props.pizzeria1 && props.pizzeria1.map(product=>{ return <Producto key={product.id} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} product={JSON.stringify(product)} stock={product.stock} nombre={product.product} cart={props.cart} img={product.img}></Producto>
                    
                    })
                    }
                     { 
                    props.bebidas && props.bebidas.map(product=>{ return <Producto key={product.id} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} product={JSON.stringify(product)} stock={product.stock} nombre={product.product} cart={props.cart} img={product.img}></Producto>
                    
                    })
                    }

                    { 
                    props.postres && props.postres.map(product=>{ return <Producto key={product.id} onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} product={JSON.stringify(product)} stock={product.stock} nombre={product.product} cart={props.cart} img={product.img}></Producto>
                    
                    })
                    }
                </div>
                    
                {/* ------Fila PRODUCTOS
                <CardDeck className="carddeck">
                    <Producto onAddToCart={props.onAddToCart} onAddQuant={props.onAddQuant} products={props.products}></Producto>
                    <Producto onAddToCart={props.onAddToCart} products={props.products}></Producto>
                    <Producto onAddToCart={props.onAddToCart} products={props.products}></Producto>
                </CardDeck>
                */ }

            </div>
        </>
    )
}

export default FilaProductos;