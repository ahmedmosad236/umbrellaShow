import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import img1 from "../assets/img/testimonials-1.jpg";
import img2 from "../assets/img/testimonials-2.jpg";
import img3 from "../assets/img/testimonials-3.jpg";
import img4 from "../assets/img/testimonials-4.jpg";
import img5 from "../assets/img/testimonials-5.jpg";
// import img2 from "../assets/img/testimonials-2.jpg";
// import img3 from "../assets/img/testimonials-3.jpg";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title">
        <span className="span-title">Happy Customers</span>
        <h2>Testimonials</h2>
        <div className="underline"></div>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              slidesPerView={2}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 1,
                },
              }}
              className="init-swiper"
            >
              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src={img1} alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">ِAhmed Sami</h3>
                  <blockquote>
                    <p>
                      “Working with this team was an absolute game-changer for
                      our corporate retreat. They managed everything from venue
                      selection to post-event feedback with precision and
                      creativity. ”
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src={img3} alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Mohammed shrief</h3>
                  <blockquote>
                    <p>
                      “I’ve never worked with an event organizer who could
                      handle complex logistics with such ease. Our product
                      launch was flawless, and the feedback from our clients has
                      been phenomenal. ”
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src={img2} alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Khaled Mostafa</h3>
                  <blockquote>
                    <p>
                      “Their expertise in organizing team-building events is
                      unmatched. The activities they curated were not only fun
                      but also aligned with our company values, boosting both
                      morale and productivity.”
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src={img4} alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Omar Ahmed</h3>
                  <blockquote>
                    <p>
                      “From the initial consultation to the final wrap-up, they
                      were on top of every detail. Their ability to manage
                      large-scale events while keeping a personal touch made all
                      the difference.”
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src={img5} alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Naif Fisel</h3>
                  <blockquote>
                    <p>
                      “Partnering with this team for our charity gala was the
                      best decision we made. They brought our vision to life and
                      ensured everything ran like clockwork. ”
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
