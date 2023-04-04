import React from "react"
import "./NavBar.css"
import Shop from "../Shop/Shop"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul className="List-ul">
            <Link to="/">
                Inicio
            </Link>
            <Link to="/contact">
                Contacto
            </Link>
            <Link to="/about">
                About
            </Link>
            
            <Link to="/aletas" className="categorias">Aletas</Link>
            <Link to="/mascaras" className="categorias">Máscaras</Link>
            <Link to="/chalecos" className="categorias">Chalecos</Link>
            <Link to="/reguladores" className="categorias">Reguladores</Link>
            <Link>
                <Shop />
            </Link>
            
            </ul>
    </nav>
    )
}

export default NavBar