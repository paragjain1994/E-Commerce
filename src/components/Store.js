import React, { useState } from "react";
import Card from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import Title from "./Title";
import Header from "./Header";
import Cart from "./Cart";
import { Button } from "react-bootstrap";
import productsArr from "./ProductArr";

const Store = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };

  const productlist = productsArr.map((prod) => (
    <Card
      key={prod.id}
      id={prod.id}
      title={prod.title}
      imageUrl={prod.imageUrl}
      price={prod.price}
      avail_stock={prod.avail_stock}
    ></Card>
  ));


  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Title />
      <ul className={classes.container}>{productlist}</ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1%",
        }}
      >
        <Button variant="outline-secondary" onClick={showCartHandler}>See the Cart</Button>
      </div>
    </div>

  );
};

export default Store;
