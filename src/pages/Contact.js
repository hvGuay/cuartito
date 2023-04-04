import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const Contact = () => {
  const navigate=useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    },10000)
  },[navigate])

  return (
    <div>
    <h1>Contacto</h1>
    <h3>Dirección: Gral. Paz 4776, Mar del Plata, Prov. de Buenos Aires</h3>
    <h3>Teléfono: 223-6814405</h3>
    </div>
  )
}

export default Contact