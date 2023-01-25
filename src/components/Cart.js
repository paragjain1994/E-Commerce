import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import "./Crt.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          title: "Colors",

          price: 100,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

          quantity: 2,
        },

        {
          title: "Black and white Colors",

          price: 50,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

          quantity: 3,
        },

        {
          title: "Yellow and Black Colors",

          price: 70,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

          quantity: 1,
        },

        {
          title: "Black and white Colors",

          price: 50,

          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

          quantity: 3,
        },
      ].map((item) => (
        <li>
          <div className="cart-row">
            <span className="cart-item cart-column">
              <img className="cart-img" src={item.imageUrl} alt="img" />
              <span className="cart-img">{item.title}</span>
            </span>
            <span className="cart-price cart-column">{`$${item.price.toFixed(
              2
            )}`}</span>
            <span className="cart-quantity cart-column">{item.quantity}</span>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      <section className={classes.cont}>
        <h3>CART</h3>
        <div className="cart-row cart-header">
          <span className="cart-item cart-column">ITEM</span>
          <span className="cart-price cart-column">PRICE</span>
          <span className="cart-quantity cart-column">QUANTITY</span>
        </div>
        {cartItems}
      </section>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$35.7`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
