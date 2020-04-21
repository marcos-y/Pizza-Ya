import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel1 from './components/Carousel1';
import Promociones from './components/Promociones';
import Title from './components/Title';
import Pizzeria from './components/Pizzeria';
import Footer from './components/Footer';

import img1 from './components/pizza_hut.jpg';
import img2 from './components/logoContinental1.jpg';
import img3 from './components/dominos.png';
import img4 from './components/pizzajhon.png';
import img5 from './components/tradicional.jpg';
import img6 from './components/pizzada.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Productos from './components/Productos';
import Admin from './components/Admin/Admin';
import MisProductos from './components/Admin/MisProductos';
import Banners from './components/Admin/Banners';
import Tienda from './components/Admin/Tienda';

function App() {

  {/* A JSX comment
      ACA DEBERIAN LLEGAR LAS PROPS Y FCIONES, HASTA PRODUCTO.JS:
      PIZZERIA=> PRODUCTOS y PROMOCIONES=> FILAPRODUCTOS => PRODUCTO
     <ProductList products={products} handleAddToCart={handleAddToCart} />
      <Cart cart={cart} handleQuantity={handleQuantity} />
      CART Y HANDLE QUANT => PROMOS =>FILA PROD =>PROD =>PROD EN MODAL
  };
  */}

  const products = [
    {
      id: 1,
      product: "Pizza1",
      stock: 12
    },
    {
      id: 2,
      product: "Pizza2",
      stock: 30
    },
    {
      id: 3,
      product: "Pizza3",
      stock: 25
    }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = product => {
    let newCart;
    if (cart.find(prod => prod.id === product.id)) {
      const updatedProduct = cart.filter(prod => prod.id === product.id);
      if (updatedProduct[0].stock > updatedProduct[0].quantity) {
        const ArrayWithoutProduct = cart.filter(prod => prod.id !== product.id);
        updatedProduct[0].quantity += 1;
        newCart = [...ArrayWithoutProduct, updatedProduct[0]];
        setCart(newCart);
      }
    } else {
      let productToAdd = product;
      productToAdd.quantity = 1;
      newCart = [...cart, productToAdd];
      setCart(newCart);
    }
  };

  const handleQuantity = (product, type) => {
    const updatedProduct = cart.filter(prod => prod.id === product.id);
    const ArrayWithoutProduct = cart.filter(prod => prod.id !== product.id);

    switch (type) {
      case "add":
        if (updatedProduct[0].stock > updatedProduct[0].quantity) {
          updatedProduct[0].quantity += 1;
        }

        break;
      case "remove":
        if (updatedProduct[0].quantity >= 1) {
          updatedProduct[0].quantity -= 1;
        }
        break;
      default:
        break;
    }
    const newCart = [...ArrayWithoutProduct, updatedProduct[0]];
    setCart(newCart);
  }
    

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">

            <Header></Header>
            <Carousel1></Carousel1>
            <Promociones onAddToCart={handleAddToCart} onAddQuant={handleQuantity} products={products} cart={cart}></Promociones>
            <Title nombre="Pizzerias"></Title>
            <Pizzeria nombre="Pizza Hut" img={img1} ></Pizzeria>
            <br></br>
            <br></br>
            <Pizzeria nombre="La Continental" img={img2}></Pizzeria>
            <br></br>
            <br></br>
            <Pizzeria nombre="Domino's" img={img3}></Pizzeria>
            <br></br>
            <br></br>
            <Pizzeria nombre="Papa John" img={img4}></Pizzeria>
            <br></br>
            <br></br>
            <Pizzeria nombre="La Tradicional" img={img5}></Pizzeria>
            <br></br>
            <br></br>
            <Pizzeria nombre="La Pizzada" img={img6}></Pizzeria>
            <br></br>
            <br></br>
            <Footer></Footer>
          </Route>


          <Route path="/Productos">
            <Header></Header>
            <Productos></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Bebidas">
            <Header></Header>
            <Productos></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Postres">
            <Header></Header>
            <Productos></Productos>
            <Footer></Footer>
          </Route>


          <Route path="/Admin">
            <Admin></Admin>
          </Route>

          <Route path="/MisProductos">
            <Admin></Admin>
            <MisProductos></MisProductos>
          </Route>

          
          <Route path="/Banners">
            <Admin></Admin>
            <Banners></Banners>
          </Route>

          <Route path="/MiTienda">
            <Admin></Admin>
            <Tienda></Tienda>
          </Route>

        </Switch>


      </Router>
    </>
  );
}


export default App;
