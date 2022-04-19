import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header-content">
      <div className="Logo">
        <i className="fa-brands fa-youtube"></i>
      </div>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          typeof="text"
          className="search-input"
          placeholder="Dilediğiniz şeyi arayın"
        ></input>
      </div>
      <div className="action">
        <button id="headerOturumAc" className="btn btn-light ">
          Oturum aç
        </button>
        <button id="headerKaydol" className="btn btn-dark">
          Kaydol
        </button>
      </div>
    </div>
  );
};
export default Header;
