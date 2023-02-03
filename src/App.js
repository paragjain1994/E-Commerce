import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import { Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Store from "./components/Store";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <Header />
    
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </main>
      
 

      <Footer />
    </CartProvider>
  );
}

export default App;
