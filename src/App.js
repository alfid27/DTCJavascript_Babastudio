import React from 'react';
import './App.css';
import './index'; 
import Navbar from './component/navbar';
import Container from './component/container';
import Cart from './component/cart';
import Footer from './component/footer';
import {Switch,Route} from 'react-router-dom';

function App() {
  
return (
  <div>
      <Navbar />
      <Container/>
      <Cart/>
      <Footer/>

  </div>

  );
}

export default App;
