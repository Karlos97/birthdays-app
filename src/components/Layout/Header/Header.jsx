import React from "react";
import classes from "./Header.module.scss";

const Header = () => (
  <header className={classes["app-header"]}>
    <div className={classes["app-header-block"]}>
      <div className={classes["app-header-block-logo-name"]}>
        Happy Birthday!
      </div>
    </div>
  </header>
);
export default Header;
