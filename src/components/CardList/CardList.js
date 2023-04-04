import React, {useState, useEffect} from 'react'
import axios from "axios"
import ProductCard from '../ProductCard/ProductCard'
import "./CardList.css"
import {Link} from "react-router-dom"

const CardList = () => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
      axios("https://my-json-server.typicode.com/hvGuay/Api_productos/SNK").then((res) =>
    setProducts(res.data)
    )
  },[])

  return (
    <div>
      <h1>Productos</h1>
      <div className="Cards-List">
      {products.map((product) => {
        return (
          <div key={product.id} >
            <Link to={`/detail/${product.id}`}>
            <ProductCard product={product} />
            </Link>
          </div>
          
        )
      })}</div>
      </div>
  )
}

export default CardList