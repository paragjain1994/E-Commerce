import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartcntx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Cart</span>
      <span>{cartcntx.msg}</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
