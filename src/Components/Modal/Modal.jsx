import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div>
      <div
        className="modal fade"
        id="bookingModal"
        tabIndex="-1"
        aria-labelledby="bookingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="mb-5">
            <a className="logo" href="#">
                Tour&Travel
                <i class="bi bi-airplane"></i>
              </a>
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">From</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="From"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">To</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Travel Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Adults</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Open this select menu
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Childs</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Open this select menu
                      </option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Child</option>
                      <option value="3">3 Child</option>
                      <option value="4">4 Child</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">Enter Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">Enter Your Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Phone"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Country</label>
                    <select id="country-select" className="form-select">
                      <option value="" disabled selected>
                        Choose a country
                      </option>
                      {countries.map((country) => (
                        <option key={country.cca3} value={country.cca3}>
                          {country.name.common}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Zipcode</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Zipcode"
                    />
                  </div>

                  <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="myBtn">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
