import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartWidget = () => {
  const {cart } = useContext(CartContext);
  return (
    <div className="cart">
      <ShoppingCartRoundedIcon />
      <div className="cart_counter">
        <p className="cart_count">{cart.length}</p>
      </div>
    </div>
  );
};

export default CartWidget;
