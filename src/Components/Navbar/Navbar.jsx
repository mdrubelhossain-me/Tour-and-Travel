import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarResponsive.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand"  to="/">
          Tour&Travel
                  <i class="bi bi-airplane"></i>
                </Link>
          <div
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonial">
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="myBtn"
              data-bs-toggle="modal"
              data-bs-target="#bookingModal"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
