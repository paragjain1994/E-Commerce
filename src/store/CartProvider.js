import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  let email = localStorage.getItem("email");
  console.log("inside cartprovider");

  useEffect(() => {
    console.log("hey");

    fetch(
      `https://crudcrud.com/api/f75e5b77d9f74f8e9e02d9f735ac8517/cartData${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("GET method called");
        console.log(data);
        // cartcntx.items=data; //?
        updateItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [email]);

  const addItemToCartHandler = (newItem) => {
    console.log(newItem);
    const email = localStorage.getItem("email");

    console.log(email);

    const apiKey = `https://crudcrud.com/api/f75e5b77d9f74f8e9e02d9f735ac8517/cartData${email}`;

    f();

    async function f() {
      const res = await fetch(`${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          imageUrl: newItem.imageUrl,
          quantity: newItem.quantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    }

    const idx = items.findIndex((i) => i.id === newItem.id);

    if (idx === -1) {
      updateItems([...items, newItem]);
    } else {
      let temp = [...items];
      temp[idx].quantity =
        Number(temp[idx].quantity) + Number(newItem.quantity);
      updateItems(temp);
    }
  };

  const removeItemFromCartHandler = (id) => {
    console.log("removed item id is" + id);
    const idx = items.findIndex((i) => i.id === id);
    let temp = [...items];
    temp.splice(idx, 1);
    updateItems(temp);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: "I am accessible anywhere",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
