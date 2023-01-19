import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className={classes["topnav"]}>
          <div>
            <a href="#home">Home</a>
          </div>

          <div className={classes["topnav-right"]}>
            <a href="#store">store</a>
            <a href="#about">About</a>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
          </div>
        </div>

      
      </header>
    </Fragment>
  );
};

export default Header;
