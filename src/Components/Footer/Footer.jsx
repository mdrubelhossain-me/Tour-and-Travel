import React from "react";
import "./Footer.css";
import "./FooterResponsive.css";
import video from "../../assets/video2.mp4";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="over-lay"></div>
      <video src={video} autoPlay loop muted type="video/mp4"></video>
      <div className="content">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <a className="logo" href="#">
                Tour&Travel
                <i class="bi bi-airplane"></i>
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                aperiam labore omnis quod laboriosam nisi obcaecati, molestiae
                ipsum vel praesentium mollitia consectetur, dolorem possimus.
                Corporis rerum harum suscipit temporibus quae.
              </p>
              <div className="social">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Contact</h4>
              <ul>
                <li>
                  <i class="bi bi-geo-alt" className="text-white"></i>
                  1st Building, Road#Demo, Dhaka, Bangladesh.
                </li>
                <li>
                  <i class="bi bi-telephone"></i>
                  +880 123456
                </li>
                <li>
                  <i class="bi bi-envelope"></i>
                  example@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Services</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Insurance</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Trouism</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Agency</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="#">Payment</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Subscribe</h4>
              <p className="w-100 m-0">
                Subscribe if you want to discount price.
              </p>
              <div>
                <form>
                  <div className="s-form d-flex gap-0">
                    <input
                      className="form-control w-100"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button className="myBtn" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 justify-content-center m-auto">
              <div className="ex-footer text-center">
                <p>
                  {" "}
                  &copy; 2024 <a href="#">Tour&Travel</a> | All Rights Reserved 
                  <span className="d-block" style={{fontSize: '12px'}}><i class="bi bi-pen"></i> Rubel</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
