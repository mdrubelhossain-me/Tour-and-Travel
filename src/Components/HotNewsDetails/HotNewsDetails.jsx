import React from 'react';
import './HotNewsDetails.css';
import p1 from '../../assets/images/maldives.jpg';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { hotNews } from '../Data/NewsData';

const HotNewsDetails = () => {
  const { id } = useParams();
  const hnews = hotNews.find((news) => news.id === parseInt(id));

  if (!hnews) {
    return <NotFound />;
  }

  return (
    <div>
      <Breadcrumb title="Hot News Details" bgImg={p1} />
      <div className="container pt-5 pb-5 mt-5 mb-3">
        <div className="card">
          <div className="hot-news">
            <div className="hnews-photos">
              <img src={hnews.imgSrc} className='img-fluid' alt={hnews.title} />
            </div>
            <div>
              <h2 className="d-block">
                {hnews.title}
              </h2>
              <span className="d-block">
                <i className="bi bi-calendar-event"></i> {hnews.date}
              </span>
            </div>
          </div>
          <div className='mt-3'>
                <p>{hnews.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HotNewsDetails;
