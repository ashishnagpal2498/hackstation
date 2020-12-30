import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const links = [
  { name: "home", to: "/" },
  { name: "dashboard", to: "/dashboard" },
  { name: "about", to: "/about" },
  { name: "upcoming", to: "/upcoming" },
  { name: "login/signup", to: "/login" }
];

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <NavLink exact to="/">
          {/* <img src="" alt="logo-here" /> */}
          <span>HackStation</span>
        </NavLink>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-links">
          {links.map((link, id) => (
            <li key={id} className="header-link-item">
              <NavLink
                exact
                to={link.to}
                className="header-link"
                activeClassName="header-link-active"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
