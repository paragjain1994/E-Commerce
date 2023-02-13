import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import { Route,Redirect } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Store from "./components/Store";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <CartProvider>
      <Header />

      <main>
      <Route path="/" exact>
          <Redirect to="/store" />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
