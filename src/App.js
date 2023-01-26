import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./Cards/Card";
import classes from "./Cards/Card.module.css";
import { Button } from "react-bootstrap";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

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

function App() {
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
    <CartProvider>
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
      <Footer />
    </CartProvider>
  );
}

export default App;
