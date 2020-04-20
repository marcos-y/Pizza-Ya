import React from 'react';
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
  return (
    <>
      <Router>


        <Switch>

          <Route exact path="/">

            <Header></Header>
            <Carousel1></Carousel1>
            <Promociones></Promociones>
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
