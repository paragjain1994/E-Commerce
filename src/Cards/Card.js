import React, { useContext, useState } from "react";
import classes from "./Card.module.css";
import CartContext from "../store/cart-context";

const Card = (props) => {
  console.log(props);     
  const cartcntx = useContext(CartContext);

  const addItemToCart = () => {
    console.log(props);   
    const quantity = 1;
    cartcntx.addItem({ ...props, quantity: quantity });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <h4>{props.title}</h4>
      <img
        className={classes.img}
        src={props.imageUrl}
        alt="img"
        width="75%"
        height="75%"
      />

      <h3>{price}</h3>
      <button className={classes.btn} onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
