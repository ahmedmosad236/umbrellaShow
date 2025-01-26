import React from "react";
import {
  BsAward,
  BsCast,
  BsClipboardHeart,
  BsFillLightningChargeFill,
  BsFilm,
  // BsMagic,
  BsMeta,
  // BsMic,
  // BsMusicNoteBeamed,
} from "react-icons/bs";
function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <span>Our Services</span>
        <h2>Our Services</h2>
        <div className="underline"></div>

        <p>
          We offer a wide range of event management services tailored to meet
          the unique needs of our clients.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-briefcase">
                  <BsAward />
                </i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#">CONFERENCES </a>
                </h4>
                <p className="description">
                  We provide comprehensive conference and symposium organization
                  services for both government and private entities, ensuring
                  seamless event planning and execution.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-card-checklist">
                  <BsCast />
                </i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#">EVENT SUPPLIES</a>
                </h4>
                <p className="description">
                  We specialize in providing high-quality indoor and outdoor
                  event supplies for concerts, weddings, and special occasions,
                  catering to all your event needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-bar-chart">
                  <BsClipboardHeart />
                </i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#">PARTY & EVENT FILMING</a>
                </h4>
                <p className="description">
                  Our team offers professional TV and film production services
                  for ceremonies, weddings, opening events, exhibitions, and
                  other special occasions, capturing unforgettable moments with
                  cinematic quality.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-binoculars">
                  <BsFillLightningChargeFill />
                </i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#">EXHIBITIONS</a>
                </h4>
                <p className="description">
                  We organize commercial exhibitions designed to promote trade,
                  highlight local industrial and agricultural products, and host
                  specialized fairs tailored to various industries.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-brightness-high">
                  <BsFilm />
                </i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#">FOLKLORE</a>
                </h4>
                <p className="description">
                  We provide traditional folklore dance performances for private
                  and public events, enriching cultural experiences with
                  authentic and vibrant showcases.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-calendar4-week">
                  <BsMeta />
                </i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#">LASER SHOW</a>
                </h4>
                <p className="description">
                  We provide laser and special effects shows for trade fairs, TV
                  advertisements, conferences, seminars, and sports events,
                  creating visually stunning experiences .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
// import React from "react";
// import {
//   BsAward,
//   BsCast,
//   BsClipboardHeart,
//   BsFillLightningChargeFill,
//   BsFilm,
//   // BsMagic,
//   BsMeta,
//   // BsMic,
//   // BsMusicNoteBeamed,
// } from "react-icons/bs";

// function Services() {
//   return (
//     <section id="services" className="services section">
//       <div className="container section-title">
//         <span>Our Services</span>
//         <h2>Our Services</h2>
//         <p>
//           We offer a wide range of event management services tailored to meet
//           the unique needs of our clients.
//         </p>
//       </div>

//       <div className="container">
//         <div className="row gy-4">
//           <div className="col-lg-4 col-md-6">
//             <div className="service-item  position-relative">
//               <div className="icon">
//                 <i className="bi bi-activity">
//                   <BsMeta />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Conference & Symposium Organization</h3>
//               </a>
//               <p>
//                 Includes firms offering conference and symposium organization
//                 services to government or private bodies.
//               </p>
//             </div>
//           </div>

//           <div
//             className="col-lg-4 col-md-6"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-broadcast">
//                   <BsAward />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Event Supplies & Preparations</h3>
//               </a>
//               <p>
//                 Specialized in indoor and outdoor supplies for events like
//                 concerts, weddings, and special occasions.
//               </p>
//             </div>
//           </div>

//           <div
//             className="col-lg-4 col-md-6"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-easel">
//                   <BsFilm />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Parties And Private Function Filming</h3>
//               </a>
//               <p>
//                 Firms that undertake TV and movie filming of ceremonies and
//                 personal occasions such as weddings, opening ceremonies, and
//                 exhibitions.
//               </p>
//             </div>
//           </div>

//           <div
//             className="col-lg-4 col-md-6"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-bounding-box-circles">
//                   <BsCast />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Exhibitions Organizing</h3>
//               </a>
//               <p>
//                 Specializes in organizing commercial exhibitions to promote
//                 trade and boost local industrial and agricultural products. Also
//                 includes holding specialized fairs.
//               </p>
//               <a href="#" ></a>
//             </div>
//           </div>

//           <div
//             className="col-lg-4 col-md-6"
//             data-aos="fade-up"
//             data-aos-delay="500"
//           >
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-calendar4-week">
//                   <BsClipboardHeart />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Folklore Dance Performances</h3>
//               </a>
//               <p>
//                 Offers traditional folklore dance performances for private or
//                 public functions, enhancing cultural experiences at events.
//               </p>
//               <a href="#" ></a>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6">
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-chat-square-text">
//                   <BsFillLightningChargeFill />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Laser Show</h3>
//               </a>
//               <p>
//                 Includes firms which use the laser and special efiects
//                 technology to perform shows in trade fairs, TV advertisements,
//                 conferences, seminars, sports events .
//               </p>
//               <a href="#" ></a>
//             </div>
//           </div>
//           {/* <div className="col-lg-4 col-md-6">
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-chat-square-text">
//                   <BsMagic />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Artistic Talent Contracting</h3>
//               </a>
//               <p>
//                 Firms that manage and promote artists for events and
//                 performances, and handle their promotion through licensed media.
//               </p>
//               <a href="#" ></a>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-chat-square-text">
//                   <BsMusicNoteBeamed />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Musical Band</h3>
//               </a>
//               <p>
//                 Includees musical groups or ensembles perform for private or
//                 puplic functions .
//               </p>
//               <a href="#" ></a>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="service-item position-relative">
//               <div className="icon">
//                 <i className="bi bi-chat-square-text">
//                   <BsMic />
//                 </i>
//               </div>
//               <a href="#" >
//                 <h3>Live Theatrical Show Production</h3>
//               </a>
//               <p>
//                 Includes theatrical shows, carnivals, concerts, operettas, drama
//                 and music organized by public and private concerns on national,
//                 sport, cultural promotional accasions .
//               </p>
//               <a href="#" ></a>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
