import "./ItemCount.css";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const ItemCount = ({setCount , count, stock}) => {

  const sumar = () => count < stock  ? setCount(count + 1) : alert("No hay más stock disponible")
  const restar = () => count > 1 ? setCount(count - 1) : alert("Debes comprar al menos un producto")


  return (
    <div className="counter">
      <div className="counter_container">
        <IconButton aria-label="remove to shopping cart" onClick={restar}>
  <RemoveCircleOutlineIcon />
</IconButton>        
        <p className="counter_count">{count}</p>
        <IconButton aria-label="add to shopping cart" onClick={sumar}>
  <AddCircleOutlineIcon />
</IconButton>
      </div>
    </div>
  );
};

export default ItemCount;
