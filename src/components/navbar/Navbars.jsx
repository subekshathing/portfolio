import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbars = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nave-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-cinnect">Connect with me</div>
    </div>
  );
};

export default Navbars;
