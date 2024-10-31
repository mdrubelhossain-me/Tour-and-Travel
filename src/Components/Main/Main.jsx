import React from "react";
import "./Main.css";
import "./MainResponsive.css";
import destinations from "../Data/DestinationData";

const Main = () => {
  return (
    <div className="container">
      <div className="popular-destination">
        <h2>Popular Destiantion</h2>
        <div className="row g-3 mt-3">
          {destinations.map((destination) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-6"
              key={destination.id}
            >
              <div className="card">
                <div className="destination-photo">
                  <img src={destination.imgSrc} alt={destination.d_title} />
                </div>
                <div className="card-body">
                  <a href="#" className="destination-title d-block p-0">
                    {destination.d_title}
                  </a>
                  <div>
                    <h6>
                      <i className={`bi ${destination.icon}`}></i>
                      {destination.location}
                    </h6>
                    <p className="fee m-0">${destination.Fees}</p>
                    <p className="description m-0">{destination.description}</p>
                    <a href="#"className="myBtn">Details <i class="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
