import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import "../styles/Navbar.css";

const links = [
  { name: "home", to: "/" },
  { name: "dashboard", to: "/dashboard" },
  { name: "about", to: "/about" },
  { name: "upcoming", to: "/upcoming" }
];

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <NavLink exact to="/">
          <img height='50px' src="\header-logo.png" />
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
          <li key={links.length+1} className="header-link-item">
              <NavLink
                exact
                to="/login"
                className="header-link"
                activeClassName="header-link-active"
              >
                <FontAwesomeIcon icon={faUserAlt} />
              </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
