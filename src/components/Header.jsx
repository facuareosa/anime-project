import React from "react";
import list from "../assets/images/book_4_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="anime logo" />
        <h1 className="header__title">Anime info & list</h1>
        <img className="header__list" src={list} alt="list icon" />
      </div>
    </header>
  );
}

export default Header;
