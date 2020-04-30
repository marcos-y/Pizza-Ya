import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel1 from './components/Carousel1';
import Promociones from './components/Promociones';
import Title from './components/Title';
import Pizzeria from './components/Pizzeria';
import Footer from './components/Footer';

import imagen1 from './components/pizza1.jpg';
import imagen2 from './components/pizza2.jpg';
import imagen3 from './components/pizza3.jpg';

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
import AdminApp from './components/AdminApp/AdminApp.js';
import PedidoConfirmado from './components/PedidoConfirmado.js';
import RetiroSucursal from './components/RetiroSucursal';
import EnvioDom from './components/EnvioDom.js';


function App() {

  const products = [
    {
      id: 1,
      product: "Pizza especial",
      stock: 12,
      img: imagen1
    },
    {
      id: 2,
      product: "Muzzarela",
      stock: 30,
      img: imagen2
    },
    {
      id: 3,
      product: "Cantimpalo",
      stock: 25,
      img: imagen3
    },
    {
      id: 4,
      product: "Fugazzeta",
      stock: 25,
      img: imagen1
    },
    {
      id: 5,
      product: "Pollo y queso",
      stock: 25,
      img: imagen2
    },
    {
      id: 6,
      product: "Jamon y queso",
      stock: 25,
      img: imagen3
    }
  ];

  const promos = [

    {
      id: 1,
      product: "Pizza especial mas pepsi",
      stock: 12,
      img: imagen1
    },
    {
      id: 2,
      product: "Muzzarela mas papas",
      stock: 30,
      img: imagen2
    },
    {
      id: 3,
      product: "Cantimpalo mas cerveza",
      stock: 25,
      img: imagen3
    },
    {
      id: 4,
      product: "Fugazzeta y postre",
      stock: 25,
      img: imagen1
    },
    {
      id: 5,
      product: "Pollo y queso con snacks",
      stock: 25,
      img: imagen2
    },
    {
      id: 6,
      product: "Jamon y queso con limonada",
      stock: 25,
      img: imagen3
    }
  ]

  const pizzeria1 = [
    {
      id: 1,
      product: "Pizza napolitana",
      stock: 12,
      img: imagen1
    },
    {
      id: 2,
      product: "Pizza a Taglio",
      stock: 30,
      img: imagen2
    },
    {
      id: 3,
      product: "Pizza estilo New York",
      stock: 25,
      img: imagen3
    },
    {
      id: 4,
      product: "Pizza Argentina",
      stock: 25,
      img: imagen1
    },
    {
      id: 5,
      product: "Deep dish pizza o pizza estilo Chicago",
      stock: 25,
      img: imagen2
    },
    {
      id: 6,
      product: "Sfincione",
      stock: 25,
      img: imagen3
    }
  ]

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
            <Promociones onAddToCart={handleAddToCart} onAddQuant={handleQuantity} promos={promos} cart={cart}></Promociones>
            <Title nombre="Pizzerias"></Title>

            <Pizzeria nombre="Pizza Hut" img={img1}></Pizzeria>
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
            <Footer></Footer>
          </Route>

          <Route path="/Bebidas">
            <Header></Header>
            <Productos  onAddToCart={handleAddToCart} onAddQuant={handleQuantity} products={products} cart={cart} ></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Postres">
            <Header></Header>
            <Productos  onAddToCart={handleAddToCart} onAddQuant={handleQuantity} products={products} cart={cart}></Productos>
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

          <Route path="/AdminApp">
            <AdminApp></AdminApp>
          </Route>

          <Route path="/PedidoConfirmado">
            <PedidoConfirmado></PedidoConfirmado>
          </Route>

          <Route path="/RetiroSucursal">
            <RetiroSucursal></RetiroSucursal>
          </Route>

          <Route path="/EnvioDom">
            <EnvioDom></EnvioDom>
          </Route>

        </Switch>


      </Router>
    </>
  );
}


export default App;
