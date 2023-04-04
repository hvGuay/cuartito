import React, { Component, useEffect } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//COMPONENTS
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import ProductDetail from "./pages/productDetail"

//PAGES
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CardList from "./components/CardList/CardList";
import Reguladores from "./pages/reguladores"
import Chalecos from "./pages/chalecos"
import Aletas from "./pages/aletas"
import Mascaras from "./pages/mascaras"

const App = () => { 
    return (
      <Router>
      <div className="App">
        
        <Header titulo="Bienvenido al Cuartito" 
        subtitulo="El shop de artículos de buceo del C.A.S.E.">        
        </Header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/reguladores" element={<Reguladores/>} />
          <Route path="/chalecos" element={<Chalecos/>} />
          <Route path="/aletas" element={<Aletas/>} />
          <Route path="/mascaras" element={<Mascaras/>} />


        </Routes>             
      </div>
      </Router>

    )
  }



export default App

