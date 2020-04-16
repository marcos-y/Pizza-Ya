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

function App() {
  return (
    <>
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

    </>
  );
}

export default App;
