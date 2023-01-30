import React, { useContext } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", "/contacts", "/register", "/login", "/user");
  };

  const { firstName, lastName } = useContext(AuthContext);
  return (
    <header class="header">
      <NavLink to="/">
        <div className="brandBox">
          <img
            src={process.env.PUBLIC_URL + "/assets/Images/stlogo-green.png"}
            alt="Logo"
            className="logo"
          />
          <div className="brand">
            <span className="brandName">STELLAR TRIPS</span>
            <span className="brandMotto">Space is the Limit!</span>
          </div>
        </div>
      </NavLink>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="nav-icon"></span>
      </label>
      <ul class="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/user">{`Welcome ${firstName}`}</NavLink>
        </li>
      </ul>
    </header>
  );
}
