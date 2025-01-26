import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import logoImg from "../assets/img/um-bw.png";
import logoImg2 from "../assets/img/um-brella-sho-.png";
import heroImg1 from "../assets/img/chuttersnap-Q_KdjKxntH8-unsplash (1).webp";
import heroImg2 from "../assets/img/prtoflio/photo_7_2025-01-14_06-34-20.webp";
import heroImg3 from "../assets/img/prtoflio/photo_27_2025-01-14_06-34-20.webp";
// import heroImg2 from "../assets/img/hero2.jpg";
// import heroImg3 from "../assets/img/hero3.jpg";
import { motion } from "framer-motion";

function Hero() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className="hero-section text-center text-white position-relative"
        id="hero"
      >
        <Navbar
          expand="lg"
          className={`navbar-transparent ${isSticky ? "d-none" : ""}`}
          style={{ zIndex: 1000 }}
        >
          <Container>
            <Navbar.Brand href="index.html">
              {/* <img
                src={logoImg}
                alt="Logo"
                className="me-2"
                width={250}
                height={150}
              /> */}
              <img
                src={logoImg}
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "250px", height: "auto" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbar-nav"
              className="sticky-navbar-toggler"
            />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#hero" className="head-nav">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="head-nav">
                  About Us
                </Nav.Link>
                <Nav.Link href="#clients" className="head-nav">
                  Clients
                </Nav.Link>

                <Nav.Link href="#services" className="head-nav">
                  Services
                </Nav.Link>
                {/* <Nav.Link href="#vision" className="head-nav">
                  Our Vision
                </Nav.Link> */}
                {/* <Nav.Link href="#clients" className="head-nav">
                  Clients
                </Nav.Link> */}
                <Nav.Link href="#portfolio" className="head-nav">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#contact" className="head-nav">
                  Contact
                </Nav.Link>
              </Nav>
              <a href="#about">
                <button className="ms-lg-3 nav-btn">Get Started</button>
              </a>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Swiper Carousel */}
        <div className="hero-overlay">
          <Swiper
            // spaceBetween={30}
            effect="fade"
            speed={1500}
            loop
            // centeredSlides={true}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <img
                src={heroImg1}
                alt="Slide 1"
                className="hero-img"
                loading="lazy"
              />
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="headline">
                  We transforms complex thoughts{" "}
                  <p className="persuasive2">
                    into <p className="persuasive">persuasive</p>
                  </p>
                  stories
                </h1>
                <a href="#about">
                  {/* <button className="ms-lg-3 header-btn" size="lg">
                    Explore More
                  </button> */}
                  <button
                    className="ms-lg-3 header-btn"
                    aria-label="Explore More"
                  >
                    Explore More
                  </button>
                </a>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={heroImg2}
                alt="Slide 2"
                className="hero-img"
                loading="lazy"
              />
              {/* <div className="hero-content">
                <h1>
                  We transforms complex thoughts{" "}
                  <p className="persuasive2">
                    into <p className="persuasive">persuasive</p>
                  </p>
                  stories
                </h1>
                {/* <p>Your Success is Our Priority</p> */}
              {/* <button className="ms-lg-3 nav-btn" size="lg" href="#about">
                  Explore More
                </button> */}
              {/* </div> */}
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="headline">
                  We transforms complex thoughts{" "}
                  <span className="persuasive2">
                    into <span className="persuasive">persuasive</span>
                  </span>
                  stories
                </h1>
                <a href="#about">
                  {/* <button className="ms-lg-3 header-btn" size="lg">
                    Explore More
                  </button> */}
                  <button
                    className="ms-lg-3 header-btn"
                    aria-label="Explore More"
                  >
                    Explore More
                  </button>
                </a>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={heroImg3}
                alt="Slide 3"
                className="hero-img"
                loading="lazy"
              />
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="headline">
                  We transforms complex thoughts{" "}
                  <p className="persuasive2">
                    into <p className="persuasive">persuasive</p>
                  </p>
                  stories
                </h1>
                <a href="#about">
                  {/* <button className="ms-lg-3 header-btn" size="lg">
                    Explore More
                  </button> */}
                  <button
                    className="ms-lg-3 header-btn"
                    aria-label="Explore More"
                  >
                    Explore More
                  </button>
                </a>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Navbar
        expand="lg"
        className={`navbar-transparent ${isSticky ? "fixed-top" : "d-none"}`}
      >
        <Container>
          <Navbar.Brand href="index.html">
            <img src={logoImg2} alt="Logo" width={150} height={90} />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbar-nav-sticky" /> */}
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="fixed-navbar-toggler"
          />
          <Navbar.Collapse id="navbar-nav-sticky">
            <Nav className="ms-auto">
              <Nav.Link href="#hero" className="head-nav">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="head-nav">
                About Us
              </Nav.Link>
              <Nav.Link href="#services" className="head-nav">
                Services
              </Nav.Link>
              {/* <Nav.Link href="#vision" className="head-nav">
                Our Vision
              </Nav.Link> */}
              {/* <Nav.Link href="#clients" className="head-nav">
                Clients
              </Nav.Link> */}
              <Nav.Link href="#portfolio" className="head-nav">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" className="head-nav">
                Contact
              </Nav.Link>
            </Nav>
            <a href="#about">
              <button className="ms-lg-3 nav-btn">Get Started</button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Hero;

// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // import logoImg from "../assets/img/logo.png";
// // import logoImg from "../assets/img/logo.png";
// import heroImg1 from "../assets/img/cta.jpg";
// // import heroImg2 from "../assets/img/hero2.jpg";
// // import heroImg3 from "../assets/img/hero3.jpg";
// function Hero() {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById("hero");
//       const heroHeight = heroSection?.offsetHeight || 0;
//       setIsSticky(window.scrollY > heroHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         id="header"
//         className={`header d-flex align-items-center fixed-top ${
//           isSticky ? "sticky" : ""
//         }`}
//       >
//         <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
//           <a
//             href="index.html"
//             className="logo d-flex align-items-center me-auto me-xl-0"
//           >
//             <h1 className="sitename">Append</h1>
//             <span>.</span>
//           </a>

//           <nav id="navmenu" className="navmenu">
//             <ul>
//               <li>
//                 <a href="index.html#hero" className="active">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="index.html#about">About</a>
//               </li>
//               <li>
//                 <a href="index.html#services">Services</a>
//               </li>
//               <li>
//                 <a href="index.html#portfolio">Portfolio</a>
//               </li>
//               <li>
//                 <a href="index.html#pricing">Pricing</a>
//               </li>
//               <li>
//                 <a href="index.html#team">Team</a>
//               </li>
//               <li>
//                 <a href="blog.html">Blog</a>
//               </li>
//               <li className="dropdown">
//                 <a href="#">
//                   <span>Dropdown</span>
//                   <i className="bi bi-chevron-down toggle-dropdown"></i>
//                 </a>
//                 <ul>
//                   <li>
//                     <a href="#">Dropdown 1</a>
//                   </li>
//                   <li className="dropdown">
//                     <a href="#">
//                       <span>Deep Dropdown</span>
//                       <i className="bi bi-chevron-down toggle-dropdown"></i>
//                     </a>
//                     <ul>
//                       <li>
//                         <a href="#">Deep Dropdown 1</a>
//                       </li>
//                       <li>
//                         <a href="#">Deep Dropdown 2</a>
//                       </li>
//                       <li>
//                         <a href="#">Deep Dropdown 3</a>
//                       </li>
//                       <li>
//                         <a href="#">Deep Dropdown 4</a>
//                       </li>
//                       <li>
//                         <a href="#">Deep Dropdown 5</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#">Dropdown 2</a>
//                   </li>
//                   <li>
//                     <a href="#">Dropdown 3</a>
//                   </li>
//                   <li>
//                     <a href="#">Dropdown 4</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="index.html#contact">Contact</a>
//               </li>
//             </ul>
//             <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
//           </nav>

//           <a className="btn-getstarted" href="index.html#about">
//             Get Started
//           </a>
//         </div>
//       </header>

//       {/* Hero Section with Swiper */}
//       <section id="hero" className="hero section dark-background">
//         <div className="hero-overlay">
//           <Swiper
//             // spaceBetween={30}
//             effect="fade"
//             speed={1500}
//             loop
//             // centeredSlides={true}
//             fadeEffect={{ crossFade: true }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             modules={[Autoplay, Pagination]}
//           >
//             <SwiperSlide>
//               <img src={heroImg1} alt="Slide 1" className="hero-img" />
//               <motion.div
//                 className="hero-content"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="headline">
//                   We transforms complex thoughts{" "}
//                   <p className="persuasive2">
//                     into <p className="persuasive">persuasive</p>
//                   </p>
//                   stories
//                 </h1>
//                 <a href="#about">
//                   <button className="ms-lg-3 header-btn" size="lg">
//                     Explore More
//                   </button>
//                 </a>
//               </motion.div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <img src={heroImg1} alt="Slide 2" className="hero-img" />
//               {/* <div className="hero-content">
//                 <h1>
//                   We transforms complex thoughts{" "}
//                   <p className="persuasive2">
//                     into <p className="persuasive">persuasive</p>
//                   </p>
//                   stories
//                 </h1>
//                 {/* <p>Your Success is Our Priority</p> */}
//               {/* <button className="ms-lg-3 nav-btn" size="lg" href="#about">
//                   Explore More
//                 </button> */}
//               {/* </div> */}
//               <motion.div
//                 className="hero-content"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="headline">
//                   We transforms complex thoughts{" "}
//                   <span className="persuasive2">
//                     into <span className="persuasive">persuasive</span>
//                   </span>
//                   stories
//                 </h1>
//                 <a href="#about">
//                   <button className="ms-lg-3 header-btn" size="lg">
//                     Explore More
//                   </button>
//                 </a>
//               </motion.div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <img src={heroImg1} alt="Slide 3" className="hero-img" />
//               <motion.div
//                 className="hero-content"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <h1 className="headline">
//                   We transforms complex thoughts{" "}
//                   <p className="persuasive2">
//                     into <p className="persuasive">persuasive</p>
//                   </p>
//                   stories
//                 </h1>
//                 <a href="#about">
//                   <button className="ms-lg-3 header-btn" size="lg">
//                     Explore More
//                   </button>
//                 </a>
//               </motion.div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero;
