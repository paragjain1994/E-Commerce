import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer>
      <p>
        The Generics
        <a href="mailto:hege@example.com">
          hege@example.com{" "}
          <ul className={classes.right}>
            <a href="https://www.youtube.com/" target="_blank">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"}
                alt="youtube"
                width={"6%"}
                height={"6%"}
                srcset=""
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src={"https://cdn-icons-png.flaticon.com/128/4494/4494475.png"}
                alt="facebook"
                width={"6%"}
                height={"6%"}
                srcset=""
              />
            </a>
          </ul>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
