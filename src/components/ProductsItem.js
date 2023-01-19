import React from "react";

let ProductsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div>
      <li>
        <div>
          <h3>{props.title}</h3>
          <h3>{price}</h3>
          <div>
            <img src={props.imageUrl} alt="img" />
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProductsItem;
