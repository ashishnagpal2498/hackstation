import React from "react";
import FontAwesome from "react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
import Logo from "../../images/logoinv.png";
import { Link } from "react-router-dom";

var links = {
  github: "https://github.com/ashishnagpal2498/hackstation",
  linkedin: "https://www.linkedin.com/signup",
  medium: "https://medium.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/login?lang=en",
  googleCalendar: "https://calendar.google.com/",
};

const Footer = () => {
  return (
    <footer className="footer-wrapper page-footer row">
      {/* upper row */}
      <div className="footer-row row">
        {/* hackstation general info */}
        <div className="footer-options row">
          {/* hackstation logo */}
          <div className="footer-logo col-sm">
            <Link to="/" className="nav-link">
              <img className="logo-img" src={Logo} alt="footer" />
            </Link>
          </div>
          {/* /hackstation logo */}

          {/* links about hackstation */}
          <div className="col-md footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Hackstation</span>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contributors
                </Link>
              </li>
            </ul>
          </div>
          {/* /links about hackstation */}

          {/* links for contest calendars */}
          <div className="col-md footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Resources</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={links.medium}>
                  Medium Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={links.googleCalendar}>
                  Contest Calendars
                </a>
              </li>
            </ul>
          </div>
          {/* /links for contest calendars */}

          {/* support */}
          <div className="col-md footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Support</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={links.github}>
                  Sponsor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={links.github}>
                  Contribute
                </a>
              </li>
            </ul>
          </div>
          {/* /support */}
        </div>
        {/* /hackstation general info */}
      </div>
      {/* /upper row */}

      {/* lower row */}
      <div className="footer-row text-center">
        <hr />
        <a href={links.github}>
          <FontAwesome
            className="fab fa-github-square footer-icons"
            size="2x"
          />
        </a>

        <a href={links.linkedin}>
          <FontAwesome
            className="fab fa-linkedin-square footer-icons"
            size="2x"
          />
        </a>

        <a href={links.medium}>
          <FontAwesome className="fab fa-medium footer-icons" size="2x" />
        </a>

        <a href={links.instagram}>
          <FontAwesome className="fab fa-instagram footer-icons" size="2x" />
        </a>

        <a href={links.twitter}>
          <FontAwesome
            className="fab fa-twitter-square footer-icons"
            size="2x"
          />
        </a>

        <p className="copyright">
          Copyright &copy; Hackstation {new Date().getFullYear()}
        </p>
      </div>
      {/* /lower row */}
    </footer>
  );
};

export default Footer;
