import React, { useState } from "react";
import "./Main.css";
import "./MainResponsive.css";
import destinations from "../Data/DestinationData";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Main = () => {
  const [visibleCards, setVisibleCards] = useState(8);
  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
  };

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
          {destinations.slice(0, visibleCards).map((destination) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              key={destination.id}
            >
              <div className="card">
                <div className="destination-photo">
                  <img src={destination.imgSrc} alt={destination.d_title} />
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
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="fee m-0">${destination.Fees}</p>
                      <h6>
                        <i className="bi bi-calendar-event"></i>
                        {destination.day}
                      </h6>
                    </div>
                    <p className="description m-0">
                      {truncateText(destination.description, 15)}
                    </p>
                    <Link to={`/details/${destination.id}`} className="myBtn">
                      Details <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {visibleCards < destinations.length && (
            <div className="col-lg-12 d-flex justify-content-center pt-4 pb-5">
              <button
                onClick={handleShowMore}
                className="myBtn d-block text-center"
              >
                Show More <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
