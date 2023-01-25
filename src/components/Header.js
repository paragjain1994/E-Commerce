import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.topnav}>
        <div>
          <a href="#home">Home</a>
        </div>

        <div className={classes["topnav-right"]}>
          <a href="#store">Store</a>
          <a href="#about">About</a>
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
