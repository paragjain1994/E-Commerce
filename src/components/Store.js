import React, { useState } from "react";
import Card from "../Cards/Card";
import classes from "../Cards/Card.module.css";
import Title from "./Title";
import Header from "./Header";
import Cart from "./Cart";
import { Button } from "react-bootstrap";
const productsArr = [
  {
    id: "m1",

    title: "Album 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "m2",

    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "m3",

    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "m4",

    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
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
