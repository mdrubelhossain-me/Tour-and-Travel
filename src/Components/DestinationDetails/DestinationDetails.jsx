import React from 'react';
import { useParams } from "react-router-dom";
import destinations from "../Data/DestinationData";
import NotFound from '../NotFound/NotFound';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import p1 from '../../assets/images/dubai2.jpg';

const DestinationDetails = () => {
    const { id } = useParams();
    const destination = destinations.find(dest => dest.id === parseInt(id));
  
    if (!destination) {
      return <NotFound/>;
    }

    return (
        <div>
            <Breadcrumb title="Destination Details" bgImg={p1}/>
            <div className="container mt-5">
        <div className="card">
          <div className="destination-photo">
            <img src={destination.imgSrc} className='img-fluid' alt={destination.d_title} />
          </div>
          <div className="card-body">
            <h2>{destination.d_title}</h2>
            <h6><i className={`bi ${destination.icon}`}></i> {destination.location}</h6>
            <p className="fee">${destination.Fees}</p>
            <p>{destination.description}</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DestinationDetails;