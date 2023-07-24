import React, { Fragment, useContext, useHistory } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";
import CartContext from "../store/cart-context";


const Header = (props) => {
  const loginCtx = useContext(AuthContext);
  // const cartcntx = useContext(CartContext);
  const isLoggedIn = loginCtx.isLoggedIn;
  console.log(isLoggedIn);

   const logoutHandler = () =>{
    // when we logout our items array should be empty 
    // cartcntx.items = [];
    loginCtx.logout();
  }
  return (
    <Fragment>
      <div className={classes.topnav}>
        <div>
          <NavLink  to="/home" activeClassName={classes.active}>Home</NavLink>
        </div>

        <div className={classes["topnav-right"]}>
          {!isLoggedIn && <NavLink  to="/login" activeClassName={classes.active}>Store</NavLink>}
          {isLoggedIn && <NavLink  to="/store" activeClassName={classes.active}>Store</NavLink>}
          <NavLink  to="/about" activeClassName={classes.active}>About Us</NavLink>
          {!isLoggedIn && <NavLink  to="/login" activeClassName={classes.active}>Login</NavLink>}
          {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
          <NavLink  to="/contact" activeClassName={classes.active}>Contact Us</NavLink>
          {isLoggedIn && <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
