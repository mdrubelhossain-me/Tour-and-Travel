import React from "react";
import Hero from "./../Hero/Hero";
import Title from "./../Title/Title";
import Main from "./../Main/Main";
import News from "./../News/News";
import Testimonial from "./../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Title
        Title="Popular Destination Visit"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      ></Title>
      <Main />
      <Title
        Title="Latest Travel News"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      ></Title>
      <News />
      <Title
        Title="Testimonial"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      ></Title>
      <Testimonial />
    </div>
  );
};

export default Home;
