import React, { Component } from "react";
import "./App.css"

//COMPONENTS
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import ProductCard from "./components/ProductCard/ProductCard"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
        titulo="Bienvenido al Cuartito" 
        subtitulo="El shop de artículos de buceo del C.A.S.E." 
        />
        <div className="Secciones">
      <div className="Products" >
        <ProductCard 
        name="Aletas" 
        price=""
        description="Aletas tipo splitted, jetfin, para freediving y muchas más"
        img= "https://www.divehouse.com.ar/wp-content/uploads/2018/10/oceanic-v16-ibu.jpg "
        />
      </div>
      <div className="Products" >
        <ProductCard 
        name="Chalecos/BCDs" 
        price=""
        description="Chalecos, alas, placas y sistemas sidemount"
        img= "https://www.quuot.com.ar/3803-large_default/chaleco-cressi-start-nuevo-buceo-talles-m-l-xl.jpg"
        />
      </div>
      <div className="Products" >
        <ProductCard 
        name="Máscaras" 
        price=""
        description="Enterizas, frameless, fullface y más"
        img= "https://electronautica.com/static/uploads/products/985.2027.jpg "
        />
      </div>
      <div className="Products" >
        <ProductCard 
        name="Reguladores" 
        price=""
        description="Reguladores balanceados y no-balanceados, de todas las marcas"
        img= "https://topbuceo.net/wp-content/uploads/2020/08/regulador-aire-cressi-ac2-compact.jpg "
        />
      </div>
      </div>

      </div>

    )
  }
}


export default App

