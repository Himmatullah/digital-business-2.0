
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar';
import About from './Aboute';
import Footer from './Footer';

export default function App(){
  return(
    <div>
      <Navbar />
      <About /> 
      <Footer />
    </div>
  );
}