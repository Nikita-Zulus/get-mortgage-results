import React from "react";

export const Header = () => {
  return (
    <div className="header-main">
      <img
        src={require("../images/burger-menu.svg")}
        className="header-main__buger-menu"
        alt="burger-menu"
      />
      <img
        src={require("../images/logo-cian.svg")}
        className="header-main__logo-cian"
        alt="logo-cian"
      />
      <img
        src={require("../images/icon-heart.svg")}
        className="header-main__icon-heart"
        alt="icon-heart"
      />
    </div>
  );
};
