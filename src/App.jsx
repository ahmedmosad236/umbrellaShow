import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// import States from "./components/States";
import logo from "./assets/img/logo.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // return (
    //   <div className="loading-screen">
    //     <div className="continuous-4">
    //       <img src={logo} />
    //     </div>
    //   </div>
    // );
    return (
      <div className="loading-screen">
        <div className="spinner-wrapper">
          <div className="spinner"></div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="h_main">
        <Hero />
      </div>
      <AboutUs />
      <Clients />
      <Services />
      {/* <States /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
