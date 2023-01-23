import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <img className={classes.img} src={props.imageUrl} alt="img" width="75%" height="75%" />
      <h4>{props.title}</h4>
      <h3>{price}</h3>
      <button className={classes.btn}>Add to Cart</button>
    </div>
  );
};

export default Card;
