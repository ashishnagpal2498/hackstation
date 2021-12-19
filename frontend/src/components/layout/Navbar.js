import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import FontAwesome from 'react-fontawesome';
import {Navbar,Nav} from 'react-bootstrap'
const links = [
  { name: "home", to: "/" },
  { name: "dashboard", to: "/dashboard" },
  { name: "about", to: "/about" },
  { name: "upcoming", to: "/upcoming" },
];

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand className="header-brand">
        <NavLink exact to="/">
          <img src="/logo.png" alt="logo-here"/>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
      {links.map((link, id) => (
            <li key={id} className="header-link-item">
              <NavLink
                exact
                to={link.to}
                className="header-link"
                activeClassName="header-link-active"
              >
              {  link.name  }
              </NavLink>
            </li>
          ))}
           <NavLink
            exact
            to="/signup"
            className="header-link  user"
            activeClassName="header-link-active"
          >
            <FontAwesome
              className="fas fa-user"
              size="2x"
            />
          </NavLink>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
