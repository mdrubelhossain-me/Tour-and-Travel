import React from "react";
import "./Contact.css";
import "./ContactResponsive.css";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import p1 from "../../assets/images/australia.jpg";
import { useForm } from "react-hook-form";

const Contact = () => {
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
      <Breadcrumb title="Contact" bgImg={p1} />
      <div className="contact-section mt-5 mb-5 pt-5 pb-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6 col-sm-12 l-side">
              <h2>
                <b style={{ color: "blue", opacity: ".8" }}>Connect</b> With Us
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                natus ipsam ratione ullam, esse molestias corrupti eos saepe
                autem incidunt vitae officiis! Hic, repellat maiores. Quia eos
                beatae sunt tempore?
              </p>
              <div className="row g-3 mt-5 justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <div className="c-box">
                    <div className="icon">
                      <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div className="mt-4">
                      <h6>+880 123456</h6>
                      <h6>+880 123456</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <div className="c-box">
                    <div className="icon">
                      <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div className="mt-4">
                      <h6>example@gmail.com</h6>
                      <h6>demo1@gmail.com</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                  <div className="c-box">
                    <div className="icon">
                      <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="mt-4">
                      <h6 className="pt-2">1st Building, Road#Demo, Dhaka.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 r-side">
              <div className="form-section">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-3">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <label className="form-label">First Name</label>
                      <input
                        {...register("fName", {
                          required: "This field is required",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 characters",
                          },
                        })}
                        type="text"
                        className={`form-control ${
                          errors.fName ? "is-invalid" : ""
                        }`}
                      />
                      {errors.fName && (
                        <div className="invalid-feedback">
                          {errors.fName.message}
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <label className="form-label">Last Name</label>
                      <input
                        {...register("lName", {
                          required: "This field is required",
                          minLength: {
                            value: 3,
                            message: "Minimum 3 characters",
                          },
                        })}
                        type="text"
                        className={`form-control ${
                          errors.lName ? "is-invalid" : ""
                        }`}
                      />
                      {errors.lName && (
                        <div className="invalid-feedback">
                          {errors.lName.message}
                        </div>
                      )}
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
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>
                    <div className="d-flex justify-content-end mt-4">
                    <button type="submit" className="myBtn">
                      Send Now <i class="bi bi-send"></i>
                    </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
