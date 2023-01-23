import React from "react";

const Card = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <img src={props.imageUrl} alt="img" width="20%" height="20%" />
      <h3>{props.title}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
