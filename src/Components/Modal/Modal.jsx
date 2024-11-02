import React, { useEffect, useState } from "react";
import "./Modal.css";
import { useForm } from "react-hook-form";

const Modal = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
                <i className="bi bi-airplane"></i>
              </a>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">From</label>
                    <input
                      {...register("from", {
                        required: "This field is required",
                        minLength: { value: 3, message: "Minimum 3 characters" },
                      })}
                      type="text"
                      className={`form-control ${errors.from ? "is-invalid" : ""}`}
                      placeholder="From"
                    />
                    {errors.from && <div className="invalid-feedback">{errors.from.message}</div>}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">To</label>
                    <input
                      {...register("to", { required: "This field is required" })}
                      type="text"
                      className={`form-control ${errors.to ? "is-invalid" : ""}`}
                      placeholder="To"
                    />
                    {errors.to && <div className="invalid-feedback">{errors.to.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Travel Date</label>
                    <input
                      {...register("travelDate", { required: "This field is required" })}
                      type="date"
                      className={`form-control ${errors.travelDate ? "is-invalid" : ""}`}
                    />
                    {errors.travelDate && <div className="invalid-feedback">{errors.travelDate.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Adults</label>
                    <select
                      {...register("adults", { required: "This field is required" })}
                      className={`form-select ${errors.adults ? "is-invalid" : ""}`}
                    >
                      <option value="" disabled>
                        Select number of adults
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    {errors.adults && <div className="invalid-feedback">{errors.adults.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Children</label>
                    <select
                      {...register("children")}
                      className="form-select"
                    >
                      <option value="" disabled>
                        Select number of children
                      </option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">First Name</label>
                    <input
                      {...register("firstName", {
                        required: "This field is required",
                        minLength: { value: 3, message: "Minimum 3 characters" },
                      })}
                      type="text"
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                      placeholder="First Name"
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Last Name</label>
                    <input
                      {...register("lastName", {
                        required: "This field is required",
                      })}
                      type="text"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Date of Birth</label>
                    <input
                      {...register("dob", { required: "This field is required" })}
                      type="date"
                      className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                    />
                    {errors.dob && <div className="invalid-feedback">{errors.dob.message}</div>}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">Email</label>
                    <input
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter Your Email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label className="form-label">Phone</label>
                    <input
                      {...register("phone", {
                        required: "This field is required",
                        minLength: { value: 10, message: "Minimum 10 characters" },
                      })}
                      type="text"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Enter Your Phone"
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Country</label>
                    <select {...register("country", { required: "This field is required" })} 
                    className={`form-select ${errors.country ? "is-invalid" : ""}`}>
                      <option value="" disabled>
                        Choose a country
                      </option>
                      {countries.map((country) => (
                        <option key={country.cca3} value={country.cca3}>
                          {country.name.common}
                        </option>
                      ))}
                    </select>
                    {errors.country && <div className="invalid-feedback">{errors.country.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Address</label>
                    <input
                      {...register("address", { required: "This field is required" })}
                      type="text"
                      className={`form-control ${errors.address ? "is-invalid" : ""}`}
                      placeholder="Enter Your Address"
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <label className="form-label">Zipcode</label>
                    <input
                      {...register("zipcode", { required: "This field is required" })}
                      type="text"
                      className={`form-control ${errors.zipcode ? "is-invalid" : ""}`}
                      placeholder="Enter Your Zipcode"
                    />
                    {errors.zipcode && <div className="invalid-feedback">{errors.zipcode.message}</div>}
                  </div>

                  <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="myBtn">
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
