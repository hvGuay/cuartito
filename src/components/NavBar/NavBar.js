import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWideget";
import logo from "../../assets/LogoCase.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">

<ul className="nav_ul">
        <NavLink to={"/"}>
            <img src={logo} className="menu_logo" alt="Diving" />
          </NavLink>

        <li className="nav_li">
            <NavLink to={"/about"} className="links">About </NavLink>
          </li>

          <li className="nav_li">
            <NavLink to={"category/Chalecos"} className="links">Chalecos</NavLink>
          </li>

          <li className="nav_li">
            <NavLink to={"category/Reguladores"} className="links">Reguladores</NavLink>
          </li>

          <li className="nav_li">
            <NavLink to={"category/Mascaras"} className="links">Máscaras</NavLink>
          </li>

          <li className="nav_li">
            <NavLink to={"category/Aletas"}className="links">Aletas</NavLink>
          </li>
          <li className="nav_li">
          <NavLink to={"/cart"}>
            <CartWidget />
        </NavLink>
        </li>
        </ul>


    </div>

  );
};

export default NavBar;
