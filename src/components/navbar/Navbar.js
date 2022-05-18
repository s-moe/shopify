import React from "react";
import "./navbar.scss";
import logo from "../../assets/lightbulbLogo.png";

export default function Navbar() {
  const title = "Ideaify";
  const navbarClassName = "navbar";
  const role = "presentation";
  const logoAltText = "lightbulb logo with yellow bulb and black outline";
  const innerDivClassName = "innerDiv";

  return (
    <nav className={navbarClassName}>
      <div className={innerDivClassName}>
        <img src={logo} role={role} alt={logoAltText} />
        <h1>{title}</h1>
      </div>
    </nav>
  );
}
