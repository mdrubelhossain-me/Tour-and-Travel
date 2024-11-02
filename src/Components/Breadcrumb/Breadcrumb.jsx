import React from "react";
import "./Breadcrumb.css";
import "./BreadcrumbResponsive.css";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="bredcumb-section">
      <div className="overlay"></div>
      <div className="bredcumb-text position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="page-title">
            <h3 className="fw-bold">Testimonial</h3>
          </div>
          <div className="mt-10">
            <Link className="go-home" to="/">
              Home
            </Link>
            <span>
              <i
                className="bi bi-chevron-right mx-1"
                style={{ color: "white" }}
              ></i>
            </span>
            <span>Testimonial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
