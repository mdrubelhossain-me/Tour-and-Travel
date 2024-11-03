import React from "react";
import "./Packages.css";
import "./PackagesResponsive.css";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import p1 from "../../assets/images/singapore.jpg";
import p2 from '../../assets/images/dubai2.jpg'
import p3 from '../../assets/images/thailand.jpg';

const Packages = () => {
  return (
    <div>
      <Breadcrumb title="Packages" bgImg={p1} />
      <div className="container">
        <div className="package-section pt-5 pb-5 mt-5 mb-5">
          <div className="row g-4">
          <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="p-photo">
                  <div className="over-lay"></div>
                  <img src={p1} alt="" />
                  <div className="p-title">
                    <h2>
                      Package <b>01</b>
                    </h2>
                    <h3>Basic</h3>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <h3 className="myBtn text-center mt-3">$2200</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="p-photo">
                  <div className="over-lay"></div>
                  <img src={p2} alt="" />
                  <div className="p-title">
                    <h2>
                      Package <b>02</b>
                    </h2>
                    <h3>Standard</h3>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <h3 className="myBtn text-center mt-3">$2600</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="p-photo">
                  <div className="over-lay"></div>
                  <img src={p3} alt="" />
                  <div className="p-title">
                    <h2>
                      Package <b>03</b>
                    </h2>
                    <h3>Premium</h3>
                  </div>
                </div>
                <div className="card-body">
                  <ul>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                    <li><i class="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <h3 className="myBtn text-center mt-3">$3200</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
