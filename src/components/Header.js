import React from "react";
import userIcon from "../assets/user-icon.png";
import logo from "../assets/logo-platzi-video-BW2.png";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/counter">Cuenta</Link>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
