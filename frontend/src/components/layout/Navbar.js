import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import FontAwesome from 'react-fontawesome';
import SignUp from './SignUp';

const links = [
  { name: "home", to: "/" },
  { name: "dashboard", to: "/dashboard" },
  { name: "about", to: "/about" },
  { name: "upcoming", to: "/upcoming" },
];

const Navbar = () => {
  const [displaySignup, setSignUpDisplay] = useState(false);

  return (
    <>
    <header className="header">
      <div className="header-brand">
        <NavLink exact to="/">
          <img src="/logo.png" alt="logo-here" />
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
              {  link.name  }
              </NavLink>
            </li>
          ))}
          <NavLink
            exact
            to="/login"
            className="header-link  user"
            activeClassName="header-link-active"
          >
            <FontAwesome
              className="fas fa-user"
              size="2x"
            />
          </NavLink>
          <i className='header-link user' onClick={() => setSignUpDisplay(true)} >
            <FontAwesome className="fas fa-user-plus" size="2x"/>
          </i>
        </ul>
      </nav>
    </header>
    {displaySignup ? <SignUp onClose={() => setSignUpDisplay(false)}/> : null}
    </>
  );
};

export default Navbar;
