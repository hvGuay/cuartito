import React from 'react'
import "./Header.css"
import Logo from "./LogoCASE.png"

const Header = (props) => {
  return (
    <div className="Header">
        <img src={Logo} alt="Logo" height="300" />
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
    </div>
  )
}

export default Header 