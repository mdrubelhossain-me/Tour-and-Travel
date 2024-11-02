import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "./Components/Modal/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonial/Testimonial";
import News from "./Components/News/News";
import About from './Components/About/About';
import Packages from './Components/Packages/Packages';
import Footer from "./Components/Footer/Footer";
import NotFound from './Components/NotFound/NotFound';



const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Modal />
        <Footer />
   
    </Router>
  );
};

export default App;
