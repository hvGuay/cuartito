import React, {useEffect, useState} from 'react'
import axios from "axios"
import ProductCard from '../components/ProductCard/ProductCard'
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const [product, setProducts ] = useState ({})

    let { id } = useParams()

    useEffect(() => {
    axios(`https://my-json-server.typicode.com/hvGuay/Api_productos/SNK/${id}`).then((res) =>
      setProducts(res.data)
      )
    },[id])

  return ( 
    <div><h1>Detalle del producto</h1>
        <ProductCard  product={product} />

    </div>
  )
}

export default ProductDetail