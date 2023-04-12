import React, {useEffect, useState} from 'react'
import axios from "axios"
import ProductDetailCard from '../components/ProductDetailCard/ProductDetailCard'
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
    <div className='detalles'><h1>Detalle del producto</h1>
        <ProductDetailCard  product={product} />
        

    </div>
  )
}

export default ProductDetail