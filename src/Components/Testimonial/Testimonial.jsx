import React from "react";
import "./Testimonial.css";
import "./TestimonialResponsive.css";
import testimonials from "../Data/TestimonialData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container pb-5 mb-5">
      <div className="testimonial-section">
        <div className="row g-4 mt-3">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div className="col-lg-6 col-md-6 col-sm-12" key={testimonial.id}>
                <div className="card">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div className="testimonial-photo">
                        <img
                          src={testimonial.imgSrc}
                          className="img-fluid"
                          alt={testimonial.name}
                        />
                      </div>
                      <div>
                        <h5 className="name">{testimonial.name}</h5>
                        <p className="designation">{testimonial.designation}</p>
                        <div className="rating m-0 p-0">
                          {[...Array(Math.floor(testimonial.rating))].map(
                            (_, index) => (
                              <i
                                className="bi bi-star-fill"
                                key={index}
                                style={{ color: "orange", fontSize: "12px" }}
                              ></i>
                            )
                          )}
                          {testimonial.rating % 1 !== 0 && (
                            <i
                              className="bi bi-star-half"
                              style={{ color: "orange", fontSize: "12px" }}
                            ></i>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <i
                        className={`bi ${testimonial.icon}`}
                        style={{ color: "orange", opacity: ".7" }}
                      ></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>{testimonial.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
