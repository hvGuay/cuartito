import { NavLink } from "react-router-dom";
import "./ItemList.css";
import MultiActionAreaCard from "../Cards/Cards" 


const ItemList = ({ list }) => {
  return (
    <div className="products_container">
      {list.map((product) => (
        <NavLink to={"/details/" + product.id} key={product.id} style={{ textDecoration: "none" }}>
          <MultiActionAreaCard
            img={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default ItemList;
