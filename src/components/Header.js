import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.topnav}>
        <div>
          <Link  to="/home">Home</Link>
        </div>

        <div className={classes["topnav-right"]}>
          <Link  to="/store">Store</Link>
          <Link  to="/about">About Us</Link>
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
