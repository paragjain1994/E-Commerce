import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.topnav}>
        <div>
          <NavLink  to="/home" activeClassName={classes.active}>Home</NavLink>
        </div>

        <div className={classes["topnav-right"]}>
          <NavLink  to="/store" activeClassName={classes.active}>Store</NavLink>
          <NavLink  to="/about" activeClassName={classes.active}>About Us</NavLink>
          <NavLink  to="/contact" activeClassName={classes.active}>Contact Us</NavLink>
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
