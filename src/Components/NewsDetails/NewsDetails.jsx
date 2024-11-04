import React from "react";
import "./NewsDetails.css";
import { newsData } from "../Data/NewsData";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import p1 from "../../assets/images/dubai2.jpg";

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find((dest) => dest.id === parseInt(id));

  if (!news) {
    return <NotFound />;
  }

  return (
    <div>
      <Breadcrumb title="News Details" bgImg={p1} />
      <div className="container pt-5 pb-5 mt-5 mb-3">
        <div className="card">
          <div className="news-photo">
            <img src={news.imgSrc} className="img-fluid" alt={news.nTitle} />
          </div>
          <div className="card-body px-0">
            <h2 className="news-title d-block p-0">{news.nTitle}</h2>
            <div className="rname-date">
              <span className="d-block">
                <i class="bi bi-pen"></i> {news.rname}
              </span>
              <span className="d-block">
                <i class="bi bi-calendar-event"></i> {news.date}
              </span>
            </div>
            <div className="mt-3">
              <p className="description m-0">{news.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
