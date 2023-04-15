import React from "react";
import {Link, NavLink} from "react-router-dom";
import Logo from "./LogoCase.png"

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><img src={Logo} alt={"Logo"} width={180} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/mascaras"}>Mascaras</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/reguladores"}>Reguladores</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/chalecos"}>Chalecos</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/aletas"}>Aletas</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
<div><h1 className="titulo"> Bienvenido al Cuartito </h1>
     <h2>El shop de artículos de buceo del C.A.S.E.</h2>
     </div>
    </div>
    )
}

export default Navbar;