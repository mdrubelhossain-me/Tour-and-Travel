import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarResponsive.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Tour&Travel
            <i class="bi bi-airplane"></i>
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button type="button" className="myBtn" data-bs-toggle="modal" data-bs-target="#bookingModal">
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
