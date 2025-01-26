// import React from "react";
// import statimag from "../assets/img/stats-img.jpg";
// function States() {
//   return (
//     <section id="stats" className="stats section">
//       <div className="container section-title">
//         <span>Stats</span>
//         <h2>Stats</h2>
//       </div>
//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4 align-items-center justify-content-between">
//           <div className="col-lg-5">
//             <img src={statimag} alt="" className="img-fluid" />
//           </div>

//           <div className="col-lg-6">
//             <h3 className="fw-bold fs-2 mb-3">
//               Voluptatem dignissimos provident quasi
//             </h3>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
//               aute irure dolor in reprehenderit
//             </p>

//             <div className="row gy-4">
//               <div className="col-lg-6">
//                 <div className="stats-item d-flex">
//                   <i className="bi bi-emoji-smile flex-shrink-0"></i>
//                   <div>
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="232"
//                       data-purecounter-duration="1"
//                       className="purecounter"
//                     ></span>
//                     <p>
//                       <strong>Happy Clients</strong>{" "}
//                       <span>consequuntur quae</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="stats-item d-flex">
//                   <i className="bi bi-journal-richtext flex-shrink-0"></i>
//                   <div>
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="521"
//                       data-purecounter-duration="1"
//                       className="purecounter"
//                     ></span>
//                     <p>
//                       <strong>Projects</strong>{" "}
//                       <span>adipisci atque cum quia aut</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="stats-item d-flex">
//                   <i className="bi bi-headset flex-shrink-0"></i>
//                   <div>
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="1453"
//                       data-purecounter-duration="1"
//                       className="purecounter"
//                     ></span>
//                     <p>
//                       <strong>Hours Of Support</strong>{" "}
//                       <span>aut commodi quaerat</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="stats-item d-flex">
//                   <i className="bi bi-people flex-shrink-0"></i>
//                   <div>
//                     <span
//                       data-purecounter-start="0"
//                       data-purecounter-end="32"
//                       data-purecounter-duration="1"
//                       className="purecounter"
//                     ></span>
//                     <p>
//                       <strong>Hard Workers</strong>{" "}
//                       <span>rerum asperiores dolor</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default States;
// import React from "react";
// import { FaSmile, FaHeadset, FaUsers, FaProjectDiagram } from "react-icons/fa";
// import { motion } from "framer-motion";
// import statimag from "../assets/img/stats-img.jpg";

// function States() {
//   const stats = [
//     {
//       icon: <FaSmile />,
//       number: 300,
//       label: "Satisfied Clients",
//       description: "Trusted partnerships across industries",
//     },
//     {
//       icon: <FaProjectDiagram />,
//       number: 180,
//       label: "Successful Events",
//       description: "Flawless execution with measurable results",
//     },
//     {
//       icon: <FaHeadset />,
//       number: 2400,
//       label: "Hours of Support",
//       description: "Dedicated service to ensure seamless experiences",
//     },
//     {
//       icon: <FaUsers />,
//       number: 50,
//       label: "Professional Team Members",
//       description: "Experienced experts in event management",
//     },
//   ];

//   return (
//     <section id="stats" className="stats section light-background">
//       <div className="container section-title">
//         <span className="span-title">Our Achievements</span>
//         <h2>Our Achievements</h2>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4 align-items-center justify-content-between">
//           <motion.div
//             className="col-lg-5"
//             initial={{ opacity: 0, x: -300 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 3 }}
//           >
//             <img src={statimag} alt="Stats" className="img-fluid" />
//           </motion.div>

//           <div className="col-lg-6">
//             <motion.h3
//               className="fw-bold fs-2 mb-3"
//               initial={{ opacity: 0, y: 300 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 3 }}
//             >
//               Driving Success Through Every Event
//             </motion.h3>
//             <p>
//               We specialize in creating impactful events and communication
//               strategies that resonate with your audience. Our team of
//               professionals delivers seamless execution, ensuring every detail
//               is managed with precision and care.
//             </p>

//             <div className="row gy-4">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="col-lg-6"
//                   initial={{ opacity: 0, scale: 2 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 1, delay: index * 0.2 }}
//                 >
//                   <div className="stats-item d-flex">
//                     <div className="icon-box">{stat.icon}</div>
//                     <div>
//                       <span className="purecounter">{stat.number}</span>
//                       <p>
//                         <strong>{stat.label}</strong>
//                         <span> {stat.description}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default States;
import React, { useEffect } from "react";
import { FaSmile, FaHeadset, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import statimag from "../assets/img/stats-img.jpg";

function States() {
  const stats = [
    {
      icon: <FaSmile />,
      number: 300,
      label: "Satisfied Clients",
      description: "Trusted partnerships across industries",
    },
    {
      icon: <FaProjectDiagram />,
      number: 180,
      label: "Successful Events",
      description: "Flawless execution with measurable results",
    },
    {
      icon: <FaHeadset />,
      number: 2400,
      label: "Hours of Support",
      description: "Dedicated service to ensure seamless experiences",
    },
    {
      icon: <FaUsers />,
      number: 50,
      label: "Professional Team Members",
      description: "Experienced experts in event management",
    },
  ];

  useEffect(() => {
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  return (
    <section id="stats" className="stats section light-background">
      <div className="container section-title">
        <span className="span-title">Our Achievements</span>
        <h2>Our Achievements</h2>
        <div className="underline"></div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <img src={statimag} alt="Stats" className="img-fluid" />
          </motion.div>

          <div className="col-lg-6">
            <motion.h3
              className="fw-bold fs-2 mb-3"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              Driving Success Through Every Event
            </motion.h3>
            <p>
              We excel in crafting impactful events and communication strategies
              that truly connect with your audience. With a team of seasoned
              professionals, we ensure flawless execution, managing every detail
              with precision and care.
            </p>

            <div className="row gy-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="col-lg-6"
                  initial={{ opacity: 0, scale: 2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div className="stats-item d-flex">
                    <div className="icon-box">{stat.icon}</div>
                    <div>
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end={stat.number}
                        data-purecounter-duration="2"
                      >
                        0
                      </span>
                      <p>
                        <strong>{stat.label}</strong>
                        <span> {stat.description}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default States;
