import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Testimonial from "./Components/Testimonial/Testimonial";
import Aos from 'aos';
import 'aos/dist/aos.css';
import News from "./Components/News/News";


const App = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div>
      <Navbar />
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
      <News/>
      <Title
        Title="Testimonial"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      ></Title>
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default App;
