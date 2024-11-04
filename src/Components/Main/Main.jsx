import React from "react";
import "./Main.css";
import "./MainResponsive.css";
import destinations from "../Data/DestinationData";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Main = () => {
  const truncateText = (text, wordLimit = 15) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="container pb-5">
      <div className="popular-destination">
        <div className="row g-4 mt-3">
          {destinations.map((destination) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              key={destination.id}
            >
              <div className="card">
                <div className="destination-photo">
                  <img src={destination.imgSrc} alt={destination.d_title} />
                  {/* <LazyLoad offset={50} placeholder={<div>Loading...</div>}>
                  <img src={destination.imgSrc} alt={destination.d_title} />
                  </LazyLoad> */}
                </div>
                <div className="card-body">
                  <Link
                    to={`/details/${destination.id}`}
                    className="destination-title d-block p-0"
                  >
                    {destination.d_title}
                  </Link>
                  <div>
                    <h6>
                      <i className={`bi ${destination.icon}`}></i>
                      {destination.location}
                    </h6>
                    <p className="fee m-0">${destination.Fees}</p>
                    <p className="description m-0">
                      {truncateText(destination.description, 15)}
                    </p>
                    <Link to={`/details/${destination.id}`} className="myBtn">
                      Details <i class="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12 d-flex justify-content-center pt-4 pb-5">
            <a href="#" className="myBtn d-block text-center">
              Show More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
