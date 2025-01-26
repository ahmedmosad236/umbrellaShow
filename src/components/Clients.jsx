// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay"; // Autoplay CSS

// import { Autoplay } from "swiper/modules";

// import logoImg1 from "../assets/img/svgexport-4.svg";
// import logoImg2 from "../assets/img/اتحاد الإمارات.svg";
// import logoImg3 from "../assets/img/جمارك دبي.svg";
// import logoImg4 from "../assets/img/شعار بلدية دبي.svg";
// import logoImg5 from "../assets/img/مركز الشباب العربي.svg";
// import logoImg6 from "../assets/img/nakheel-properties-logo.svg";
// import logoImg7 from "../assets/img/هيا الثقافي.png";

// function Clients() {
//   return (
//     <section id="clients" className="clients section light-background">
//       <div className="container section-title">
//         <span>Our Clients</span>
//         <h2>Our Clients</h2>
//       </div>
//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <Swiper
//           slidesPerView={4}
//           speed={600}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           loop
//           spaceBetween={30}
//           modules={[Autoplay]}
//           className="mySwiper"
//         >
//           <div className="swiper-wrapper align-items-center">
//             {[
//               logoImg1,
//               logoImg2,
//               logoImg3,
//               logoImg4,
//               logoImg5,
//               logoImg6,
//               logoImg7,
//             ].map((logo, index) => (
//               <SwiperSlide key={index} className="one-slide">
//                 <img
//                   src={logo}
//                   className="img-fluid"
//                   alt={`Client ${index + 1}`}
//                 />
//               </SwiperSlide>
//             ))}
//           </div>
//           <div className="swiper-pagination"></div>
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Clients;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// // import { motion } from "framer-motion";

// import logoImg1 from "../assets/img/svgexport-4.svg";
// import logoImg2 from "../assets/img/اتحاد الإمارات.svg";
// import logoImg3 from "../assets/img/جمارك دبي.svg";
// import logoImg4 from "../assets/img/شعار بلدية دبي.svg";
// import logoImg5 from "../assets/img/مركز الشباب العربي.svg";
// import logoImg6 from "../assets/img/nakheel-properties-logo.svg";
// import logoImg7 from "../assets/img/هيا الثقافي.png";

// function Clients() {
//   return (
//     <section id="clients" className="clients section light-background">
//       <div className="container clients-section-title">
//         <span>Our Clients</span>
//         <h2>Our Clients</h2>
//         <div className="underline"></div>
//       </div>

//       {/* Circles */}
//       <div className="circle"></div>
//       <div className="circle"></div>
//       <div className="circle"></div>
//       <div className="circle"></div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <Swiper
//           slidesPerView={5}
//           speed={600}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           loop
//           spaceBetween={30}
//           modules={[Autoplay]}
//           className="mySwiper"
//         >
//           <div className="swiper-wrapper align-items-center">
//             {[
//               logoImg1,
//               logoImg2,
//               logoImg3,
//               logoImg4,
//               logoImg5,
//               logoImg6,
//               logoImg7,
//             ].map((logo, index) => (
//               <SwiperSlide key={index} className="one-slide">
//                 <img
//                   src={logo}
//                   className="img-fluid"
//                   alt={`Client ${index + 1}`}
//                 />
//               </SwiperSlide>
//             ))}
//           </div>
//           <div className="swiper-pagination"></div>
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Clients;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import logoImg1 from "../assets/img/svgexport-4.svg";
// import logoImg2 from "../assets/img/اتحاد الإمارات.svg";
// import logoImg3 from "../assets/img/جمارك دبي.svg";
// import logoImg4 from "../assets/img/شعار بلدية دبي.svg";
// import logoImg5 from "../assets/img/مركز الشباب العربي.svg";
import logoImg6 from "../assets/img/nakheel-properties-logo.svg";
// import logoImg7 from "../assets/img/هيا الثقافي.png";
import logoImg8 from "../assets/img/clients/desert-landscape-official-logo-light.png";
// import logoImg9 from "../assets/img/clients/dewalogo2xhome.webp";
import logoImg10 from "../assets/img/clients/DP-en-white.svg";
import logoImg11 from "../assets/img/clients/Emaar Properties PJSC-1.svg";
import logoImg12 from "../assets/img/clients/IHCC.png";
import logoImg13 from "../assets/img/clients/Innovo building.svg";
import logoImg14 from "../assets/img/clients/logo.png";
import logoImg15 from "../assets/img/clients/mono Logo.svg";
import logoImg16 from "../assets/img/clients/svgexport-1 (1).svg";

function Clients() {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container clients-section-title">
        <span>Our Clients</span>
        <h2>Our Clients</h2>
        <div className="underline"></div>
      </div>

      {/* Circles */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          speed={600}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2, // شاشتين صغيرة
            },
            768: {
              slidesPerView: 3, // شاشات متوسطة
            },
            1024: {
              slidesPerView: 5, // شاشات كبيرة
            },
          }}
        >
          {[
            logoImg1,
            // logoImg2,
            // logoImg3,
            // logoImg4,
            // logoImg5,
            logoImg6,
            // logoImg7,
            logoImg8,
            // logoImg9,
            logoImg10,
            logoImg11,
            logoImg12,
            logoImg13,
            logoImg14,
            logoImg15,
            logoImg16,
          ].map((logo, index) => (
            <SwiperSlide key={index} className="one-slide">
              <img
                src={logo}
                className="img-fluid"
                alt={`Client ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Clients;
