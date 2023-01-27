import React , {useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items,updateItems] = useState([]);

  const addItemToCartHandler=(item)=>{
    console.log(item);
    updateItems([...items,item]);
   }

   const removeItemFromCartHandler=(id)=>{
    console.log("removed item id is" + id);
    const idx = items.findIndex((i) => i.id === id);
    let temp = [...items];
    temp.splice(idx,1);
    updateItems(temp);
   }

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: 'I am accessible anywhere'
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
