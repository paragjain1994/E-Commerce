import React from "react";
import ProductsItem from "./components/ProductsItem";

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
  const productlist = productsArr.map((prod) => (
    <ProductsItem
      key={prod.id}
      id={prod.id}
      title={prod.title}
      imageUrl={prod.imageUrl}
      price={prod.price}
    ></ProductsItem>
  ));

  return(
    <div>
    <section>

        <ul>{productlist}</ul>
 
    </section>
  </div>
  )
 
}

export default App;
