import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel1 from './components/Carousel1';
import Promociones from './components/Promociones';
import Title from './components/Title';
import Pizzeria from './components/Pizzeria';
import Footer from './components/Footer';
import ListadoPizzerias from './components/ListadoPizzerias';

import imagen1 from './components/pizza1.jpg';
import imagen2 from './components/pizza2.jpg';
import imagen3 from './components/pizza3.jpg';

import img1 from './components/pizza_hut.jpg';
import img2 from './components/logoContinental1.jpg';
import img3 from './components/dominos.png';
import img4 from './components/pizzajhon.png';
import img5 from './components/tradicional.jpg';
import img6 from './components/pizzada.jpg';

import bebida1 from './components/stella.jpg';
import bebida2 from './components/corona.jpg';
import bebida3 from './components/campari.jpg';
import bebida4 from './components/fernet.jpg';
import bebida5 from './components/gancia.jpg';
import bebida6 from './components/coca.jpg';

import postre1 from './components/flan.jpg';
import postre2 from './components/lemon.jpg';
import postre3 from './components/cafe.jpg';
import postre4 from './components/chocolate.jpg';
import postre5 from './components/gelatina.jpg';
import postre6 from './components/helado.jpg';

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

  const bebidas = [
    {
      id: 1,
      product: "Cerveza Stella Artois",
      stock: 25,
      img: bebida1
    },
    {
      id: 2,
      product: "Cerveza Corona",
      stock: 25,
      img: bebida2
      
    },
    {
      id: 3,
      product: "Campari",
      stock: 25,
      img: bebida3

    },
    {
      id: 4,
      product: "Fernet",
      stock: 25,
      img: bebida4

    },
    {
      id: 5,
      product: "Gancia",
      stock: 25,
      img: bebida5

    },
    {
      id: 6,
      product: "Coca",
      stock: 25,
      img: bebida6

    },
  ]

  const postres = [
    {
      id: 1,
      product: "Flan",
      stock: 25,
      img: postre1
    },
    {
      id: 2,
      product: "Lemon Pie",
      stock: 25,
      img: postre2
    },
    {
      id: 3,
      product: "Postre de cafe",
      stock: 25,
      img: postre3
    },
    {
      id: 4,
      product: "Postre chocolate",
      stock: 25,
      img: postre4
    },
    {
      id: 5,
      product: "Gelatina",
      stock: 25,
      img: postre5
    },
    {
      id: 6,
      product: "Helado",
      stock: 25,
      img: postre6
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

  const listadoPizzerias = [
    {
      nombre: "Pizza Hut",
      imagen: img1
    },
    {
      nombre:"La Continental",
      imagen: img2
    },
    {
      nombre:"Domino's",
      imagen: img3
    },
    {
      nombre:"Papa John",
      imagen: img4
    },
    {
      nombre:"La tradicional",
      imagen: img5
    },
    {
      nombre:"La pizzada",
      imagen: img6
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
           
            <ListadoPizzerias  img1={img1}  img2={img2}  img3={img3} img4={img4}  img5={img5} img6={img6} pizzeria1={pizzeria1} listadoPizzerias={listadoPizzerias}></ListadoPizzerias>

            <Footer></Footer>
         

          </Route>


          <Route path="/Productos/:prods">
            <Header></Header>
            <Productos></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Pizzeria1/:nombre">
            <Header></Header>
            <Productos nombre="productos" onAddToCart={handleAddToCart} onAddQuant={handleQuantity} pizzeria1={pizzeria1} cart={cart}></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Bebidas">
            <Header></Header>
            <Productos nombre="bebidas" onAddToCart={handleAddToCart} onAddQuant={handleQuantity} bebidas={bebidas} cart={cart} ></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Postres">
            <Header></Header>
            <Productos nombre="postres" onAddToCart={handleAddToCart} onAddQuant={handleQuantity} postres={postres} cart={cart}></Productos>
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
