// import React from "react";
// import {
//   BsActivity,
//   BsBuildings,
//   BsCalendar2Heart,
//   BsClipboardData,
// } from "react-icons/bs";

// function AboutUs() {
//   return (
//     <section id="about" className="about section light-background">
//       <div className="container section-title " data-aos="fade-up">
//         <span>
//           About Us
//           <br />
//         </span>
//         <h2>
//           About Us
//           <br />
//         </h2>
//         <p>
//           Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
//           consectetur velit
//         </p>
//       </div>
//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row align-items-xl-center gy-5">
//           <div className="col-xl-5 content">
//             {/* <h3>About Us</h3> */}
//             <h2>UMBRELLA SHOW</h2>
//             <p>
//               The team of results-driven event organizers and communications
//               experts who transforms complex thoughts and insights into
//               persuasive stories
//             </p>
//             <a href="#" className="read-more">
//               <span>Read More</span>
//               <i className="bi bi-arrow-right"></i>
//             </a>
//           </div>

//           <div className="col-xl-7">
//             <div className="row gy-4 icon-boxes">
//               <div className="col-md-6" >
//                 <div className="icon-box">
//                   <i className="bi bi-buildings">
//                     {" "}
//                     <BsBuildings />{" "}
//                   </i>
//                   <h3>Eius provident</h3>
//                   <p>
//                     established in 2018 by Sultan Al Rumaithi, a figure
//                     well-known for his innovative approaches to any events
//                     concept
//                   </p>
//                 </div>
//               </div>

//               <div className="col-md-6" >
//                 <div className="icon-box">
//                   <i className="bi bi-clipboard-pulse">
//                     <BsCalendar2Heart />
//                   </i>
//                   <h3>Rerum aperiam</h3>
//                   <p>
//                     Autem saepe animi et aut aspernatur culpa facere. Rerum
//                     saepe rerum voluptates quia
//                   </p>
//                 </div>
//               </div>

//               <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
//                 <div className="icon-box">
//                   <i className="bi bi-command">
//                     <BsClipboardData />
//                   </i>
//                   <h3>Veniam omnis</h3>
//                   <p>
//                     Omnis perferendis molestias culpa sed. Recusandae quas
//                     possimus. Quod consequatur corrupti
//                   </p>
//                 </div>
//               </div>

//               <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
//                 <div className="icon-box">
//                   <i className="bi bi-graph-up-arrow">
//                     {" "}
//                     <BsActivity />
//                   </i>
//                   <h3>Delares sapiente</h3>
//                   <p>
//                     Sint et dolor voluptas minus possimus nostrum. Reiciendis
//                     commodi eligendi omnis quideme lorenda
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;
import React from "react";
import {
  BsActivity,
  BsBuildings,
  BsCalendar2Heart,
  BsClipboardData,
} from "react-icons/bs";

function AboutUs() {
  return (
    <section id="about" className="about section light-background">
      <div
        className="container section-title"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span>About Us</span>
        <h2>About Us</h2>
        <div className="underline"></div>

        <p className="fs-5 mb-3">
          Umbrella Show Company is a team of results-driven event organizers and
          communications experts who transform complex thoughts and insights
          into persuasive stories.
        </p>
      </div>

      <div className="container ">
        <div className="row align-items-xl-center gx-5 gy-5 ">
          {/* Left Content Section */}
          <div className="col-xl-4 content  ">
            <h2>Our Story</h2>
            <p>
              Umbrella Show Company was Founded in 2018 by Eihab Majed Nassif, a
              visionary leader known for his innovative approach to event
              concepts, Umbrella Show brings over 30 years of expertise in the
              media industry across the UAE and beyond.
            </p>
            <a className="read-more" href="#hero">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          {/* Right Icon Box Section */}
          <div className="col-xl-8">
            <div className="row gy-4 icon-boxes">
              {/* Box 1 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <i className="icon">
                    <BsBuildings />
                  </i>
                  <h3>Established in 2018</h3>
                  <p>
                    Founded by Eihab Majed Nassif, known for his innovative
                    approach to event concepts and 30+ years of experience.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="icon">
                    <BsCalendar2Heart />
                  </i>
                  <h3>Engaging Media</h3>
                  <p>
                    We specialize in engaging influential media, analysts, and
                    targeted audiences with precision and impact.
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="icon">
                    <BsClipboardData />
                  </i>
                  <h3>Our Passion</h3>
                  <p>
                    Our team is a dynamic group of journalists, content
                    creators, event planners, and social media strategists, all
                    driven by a passion for crafting exceptional experiences.
                  </p>
                </div>
              </div>

              {/* Box 4 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="icon">
                    <BsActivity />
                  </i>
                  <h3>Driving Results</h3>
                  <p>
                    We craft persuasive stories that promote distribution,
                    sales, and measurable outcomes for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
