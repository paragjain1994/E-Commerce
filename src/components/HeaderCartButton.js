import React, { useContext ,useEffect} from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const location = useLocation();

  console.log(location);
  //console.log(props.productID); // coming from ProductDetails pg
  const cartcntx = useContext(CartContext);

  let quantity = 0;
  console.log(cartcntx.items)
  cartcntx.items.forEach((item) => {
    //console.log(item.quantity);
    quantity = quantity + Number(item.quantity);
  });
  console.log(quantity);

  // console.log(`/store/${props.productID}`);
 
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span>Cart</span>
        {/* <span>{cartcntx.msg}</span> */}
        <span className={classes.badge}>{quantity}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
