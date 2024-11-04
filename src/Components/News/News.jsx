import React from "react";
import "./News.css";
import "./NewsResponsive.css";
import { newsData, hotNews } from "../Data/NewsData";
import { Link } from "react-router-dom";

const News = () => {
  const truncateText = (text, wordLimit = 10) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div>
      <div className="container pb-5 mb-4">
        <div className="news-section">
          <div className="row g-4 mt-4">
            <div className="col-lg-8 col-md-8 col-sm-6 col-6">
              <div className="row g-4">
                {newsData.map((news) => (
                  <div className="col-lg-6 col-md-6 col-sm-12" key={news.id}>
                    <div className="card" data-aos="flip-left">
                      <div className="news-photo">
                        <img src={news.imgSrc} alt={news.nTitle} />
                      </div>
                      <div className="card-body">
                        <Link
                          to={`/news/details/${news.id}`}
                          className="destination-title d-block p-0"
                        >
                          {news.nTitle}
                        </Link>
                        <div className="rname-date mt-2">
                          <span className="d-block">
                            <i class="bi bi-pen"></i> {news.rname}
                          </span>
                          <span className="d-block">
                            <i class="bi bi-calendar-event"></i> {news.date}
                          </span>
                        </div>
                        <div>
                          <p className="description m-0">
                            {truncateText(news.description, 15)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <h3 className="hn-title">
                Hot News <i class="bi bi-fire"></i>
              </h3>
              <div className="line"></div>
              <div className="row">
                {hotNews.map((hnews) => (
                  <div className="col-12" key={hnews.id} data-aos="fade-left">
                    <div className="hot-news">
                      <div className="hnews-photo">
                        <img src={hnews.imgSrc} alt={hnews.title} />
                      </div>
                      <div>
                        <a href="#" className="d-block">
                          {hnews.title}
                        </a>
                        <span className="d-block">
                          <i class="bi bi-calendar-event"></i> {hnews.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
