import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const {addToCart} = useContext(CartContext)
  function onAdd (item) {
    addToCart(item, count);
  }

  const [count , setCount] = useState(1);
  
  return (
    <div className="detail">
      <div className="detail_header">
        <figure className="detail_figure">
          <img src={item.image} alt={item.title} className="detail_img" />
        </figure>
      </div>
      <div className="detail_body">
        <p className="detail_title">{item.title}</p>
        <p className="detail_description">{item.description}</p>
        <p className="detail_price">${item.price}</p>
      </div>
      <div className="detail_footer">
        <ItemCount stock = {item.stock} count = {count} setCount = {setCount}/>          
        <Link to={"/cart"}>
          <button className="boton" onClick={() => onAdd (item)}>Agregar al carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
