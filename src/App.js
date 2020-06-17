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
import bebida6 from './components/coca2.jpg';

import postre1 from './components/flan.jpg';
import postre2 from './components/lemon.jpg';
import postre3 from './components/cafe.jpg';
import postre4 from './components/postrechoco.jpg';
import postre5 from './components/gelatina.jpg';
import postre6 from './components/helado2.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
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
import MisPromos from './components/Admin/MisPromos';
import Pedidos from './components/Pedidos';
import Verpedido from './components/Verpedido';

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
      id: 1,
      nombre: "Pizza Hut",
      imagen: img1
    },
    {
      id: 2,
      nombre: "La Continental",
      imagen: img2
    },
    {
      id: 3,
      nombre: "Domino's",
      imagen: img3
    },
    {
      id: 4,
      nombre: "Papa John",
      imagen: img4
    },
    {
      id: 5,
      nombre: "La tradicional",
      imagen: img5
    },
    {
      id: 6,
      nombre: "La pizzada",
      imagen: img6
    }
  ]

  /*const [cantidad,setCantidad] = useState(1);*/
  const [cart, setCart] = useState([]);
  const [cant,setCant] = useState(0);
  const [id,setId] = useState(0);

    /*Añadir producto al carrito*/
  const handleAddToCart = product => {
    let newCart;
    /*caso que ya este agregado*/
    if (cart.find(prod => prod.id === product.id)) {
      const updatedProduct = cart.filter(prod => prod.id === product.id);
      if (updatedProduct[0].stock > updatedProduct[0].quantity) {
        const ArrayWithoutProduct = cart.filter(prod => prod.id !== product.id);
        updatedProduct[0].quantity += 1;
        newCart = [...ArrayWithoutProduct, updatedProduct[0]];
        setCart(newCart);
        setTotal(total+updatedProduct[0].stock);
      } /*caso que no este en el carrito*/
    } else {
      let productToAdd = product;
      productToAdd.quantity = 1;
      /*sumo el producto al total (producto que no esta en cart)*/
      setTotal(productToAdd.stock);
      
      if(cant==0)
      {
        setCant(1);
        setTotal(productToAdd.stock);
        setId(productToAdd.id)
      }
      else
      {
        setCant(cant+1);
        setTotal(total+productToAdd.stock);
        setId(productToAdd.id)
      }
      newCart = [...cart, productToAdd];
      setCart(newCart);
    }
  };

  const [total,setTotal] = useState(0);

  /*Manejo la cantidad de productos*/
  const handleQuantity = (product, type) => {
    const updatedProduct = cart.find(prod => prod.id === product.id)
    let updatedCart = cart;
    switch (type) {
      /*AGREGAR*/
      case "add":
        if (updatedProduct.stock > updatedProduct.quantity) {
          updatedCart = updatedCart.map(prod => {
            if (prod.id === updatedProduct.id) {
              prod.quantity += 1;  
                const cant1 = cant+1;
                setCant(cant1); 
                console.log(cant1);
                setTotal(cant1*prod.stock);
            };
            return prod
          });
        }
        break;
        /*REMOVER*/
      case "remove":
        if (updatedProduct.quantity > 1) {
          updatedCart = updatedCart.map(prod => {
            if (prod.id === updatedProduct.id && prod.quantity > 1) {
              prod.quantity -= 1;
              if (cant>1)
              {      
                const cant2 = cant-1;
                setCant(cant2);
                const totresta = (cant2*prod.stock);
                setTotal(totresta);
              }         
              console.log(cant);
            };
            return prod;
          });
        }
        break;

        /*REMOVER TODOS LOS DE UN TIPO*/
        case "removeProd":
          if (updatedProduct.quantity >= 1) {
            updatedCart = updatedCart.map(prod => {
              if (prod.id === updatedProduct.id && prod.quantity >= 1) {
                const cant1 = prod.quantity;
                const precio = prod.stock;
                const borrar = (cant1*precio);
                /*
                console.log("cantidad1",cant1);
                console.log("precio",precio);
                console.log("total borrar:", cant1*precio);*/
                prod.quantity = 0;
                setTotal(total-(borrar));      
              };
              return prod;
            });
          }
          break;

          /*
          case "removeProds":
          if (updatedProduct.quantity >= 1) {
            updatedCart = updatedCart.map(prod => {
              if (prod.id === updatedProduct.id && prod.quantity >= 1) {
                prod.quantity = 0;
                setCant(prod.quantity);
                console.log(prod);
                /*setTotal(total-(prod.stock*quant2));
              };
              return prod;
            });
          }
          break; */

      default:
        break;
    }
    setCart(updatedCart);
  };

  
  const [user,setUser] = useState("");
  
  const submitUser = (name) =>{
    setUser(name);
  }


  return (
    <>
      <Router>
          
        <Switch>
         
          <Route exact path="/"> 

            <Verpedido cart={cart} total={total} onAddQuant={handleQuantity}></Verpedido>

            <Header listadoPizzerias={listadoPizzerias} submitUser={submitUser}></Header>

            <Carousel1></Carousel1>

            <Promociones cantidad={cant} /*addTotal={addTotal}*/  total={total} onAddToCart={handleAddToCart} onAddQuant={handleQuantity} promos={promos} cart={cart}></Promociones>

            <Title nombre="Pizzerias"></Title>

            <ListadoPizzerias pizzeria1={pizzeria1} listadoPizzerias={listadoPizzerias}></ListadoPizzerias>

            <Footer></Footer>

          </Route>
       
          <Route path="/Productos/:prods">
            <Verpedido  cart={cart} total={total}></Verpedido>
            <Header ></Header>
            <Productos></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Pizzeria1/:nombre">
            <Verpedido></Verpedido>
            <Header></Header>
            <Productos nombre="Productos" onAddToCart={handleAddToCart} onAddQuant={handleQuantity} pizzeria1={pizzeria1} cart={cart}></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Bebidas">
            <Verpedido></Verpedido>
            <Header></Header>
            <Productos nombre="Bebidas" onAddToCart={handleAddToCart} onAddQuant={handleQuantity} bebidas={bebidas} cart={cart} ></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Postres">
            <Verpedido></Verpedido>
            <Header></Header>
            <Productos nombre="Postres" onAddToCart={handleAddToCart} onAddQuant={handleQuantity} postres={postres} cart={cart}></Productos>
            <Footer></Footer>
          </Route>

          <Route path="/Admin">
            <Admin user={user}></Admin>
          </Route>

          <Route path="/MisProductos">
            <Admin /*user={user}*/></Admin>
            <MisProductos ></MisProductos>
          </Route>

          <Route path="/MiTienda">
            <Admin user={user}></Admin>
            <Tienda></Tienda>
          </Route>

          <Route path="/MisPromos">
            <Admin user={user}></Admin>
            <MisPromos></MisPromos>
          </Route>

          <Route path="/Pedidos">
            <Admin user={user}></Admin>
            <Pedidos></Pedidos>
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
