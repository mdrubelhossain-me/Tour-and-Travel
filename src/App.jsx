import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;