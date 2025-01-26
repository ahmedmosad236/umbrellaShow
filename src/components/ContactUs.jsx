// import React, { useState } from "react";
// import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
// import AOS from "aos";
// import "aos/dist/aos.css";

// AOS.init();

// function ContactUs() {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, subject, message } = formData;

//     // Validate if all fields are filled
//     if (name && email && subject && message) {
//       setShow(true);
//     } else {
//       alert("Please fill in all fields!");
//     }
//   };

//   return (
//     <section id="contact" className="contact section">
//       {/* Section Title */}
//       <div className="container section-title">
//         <span>Contact</span>
//         <h2>Contact</h2>
//         <div className="underline"></div>
//       </div>

//       {/* End Section Title */}

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4">
//           <div className="col-lg-6">
//             <div className="row gy-4">
//               <div className="col-md-6">
//                 <div className="info-item" data-aos="fade" data-aos-delay="200">
//                   <i>
//                     <BsGeoAlt size={30} />
//                   </i>
//                   <h3>Address</h3>
//                   <p>UAE</p>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="info-item" data-aos="fade" data-aos-delay="300">
//                   <i>
//                     <BsTelephone size={30} />
//                   </i>
//                   <h3>Call Us</h3>
//                   <p>+971 54 789 9905</p>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="info-item" data-aos="fade" data-aos-delay="400">
//                   <i>
//                     <BsEnvelope size={30} />
//                   </i>
//                   <h3>Email Us</h3>
//                   <p>info@umbrellashow.com</p>
//                   <p>www.umbrellashow.com</p>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="info-item" data-aos="fade" data-aos-delay="500">
//                   <i>
//                     <BsClock size={30} />
//                   </i>
//                   <h3>Open Hours</h3>
//                   <p>Monday - Friday</p>
//                   <p>9:00AM - 05:00PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <form
//               onSubmit={handleSubmit}
//               className="php-email-form"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="row gy-4">
//                 <div className="col-md-6">
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-12">
//                   <input
//                     type="text"
//                     name="subject"
//                     className="form-control"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-12">
//                   <textarea
//                     name="message"
//                     className="form-control"
//                     rows="6"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="col-12 text-center">
//                   {show ? (
//                     <div className="sent-message">
//                       Your message has been sent. Thank you!
//                     </div>
//                   ) : (
//                     <button type="submit" className="header-btn">
//                       Send Message
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;
import React, { useState } from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function ContactUs() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      setShow(true);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <span>Contact</span>
        <h2>Contact</h2>
        <div className="underline"></div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="200">
                  <i>
                    <BsGeoAlt size={30} />
                  </i>
                  <h3>Address</h3>
                  <p>UAE</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="300">
                  <i>
                    <BsTelephone size={30} />
                  </i>
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+971547899905" className="contact-link">
                      +971 54 789 9905
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="400">
                  <i>
                    <BsEnvelope size={30} />
                  </i>
                  <h3>Email Us</h3>
                  <p>
                    <a
                      href="mailto:info@umbrellashow.com"
                      className="contact-link"
                    >
                      info@umbrellashow.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.umbrellashow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      www.umbrellashow.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="500">
                  <i>
                    <BsClock size={30} />
                  </i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  {show ? (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  ) : (
                    <button type="submit" className="header-btn">
                      Send Message
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
