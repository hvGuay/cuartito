import React,{useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard/ProductCard'
import {Link} from "react-router-dom"


const Mascaras = () => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
      axios("https://my-json-server.typicode.com/hvGuay/Api_productos/SNK").then((res) =>
    setProducts(res.data)
    )
  },[])

  return (
    <div>
      <h1>Máscaras</h1>
      <div className="Cards-List">
      {products.map((product) => {
        return (
          <div key={product.mascara}>
            <Link to={`/detail/${product.id}`}>
            <ProductCard product={product} />
            </Link>
          </div>
          
        )
      })}</div>
      </div>
  )
}

export default Mascaras
