import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

// Import your images
import foto2 from "../assets/img/prtoflio/photo_12_2025-01-14_06-34-20.webp";
import foto3 from "../assets/img/prtoflio/photo_13_2025-01-14_06-34-20.webp";
import foto4 from "../assets/img/prtoflio/photo_22_2025-01-14_06-34-20.webp";
import foto5 from "../assets/img/prtoflio/photo_21_2025-01-14_06-34-20.webp";
import foto7 from "../assets/img/prtoflio/photo_20_2025-01-14_06-34-20.webp";
import foto8 from "../assets/img/prtoflio/photo_17_2025-01-14_06-34-20.webp";
import foto9 from "../assets/img/prtoflio/photo_26_2025-01-14_06-34-20.webp";
import foto10 from "../assets/img/prtoflio/photo_25_2025-01-14_06-34-20.webp";
import foto11 from "../assets/img/prtoflio/photo_33_2025-01-14_06-34-20.webp";
import foto12 from "../assets/img/prtoflio/photo_24_2025-01-14_06-34-20.webp";
import foto13 from "../assets/img/prtoflio/photo_23_2025-01-14_06-34-20.webp";
import foto14 from "../assets/img/prtoflio/photo_18_2025-01-14_06-34-20.webp";
import foto15 from "../assets/img/prtoflio/photo_16_2025-01-14_06-34-20.webp";
import foto16 from "../assets/img/prtoflio/photo_14_2025-01-14_06-34-20.webp";
import foto17 from "../assets/img/prtoflio/photo_35_2025-01-14_06-34-20.webp";
import foto18 from "../assets/img/prtoflio/photo_3_2025-01-14_06-34-20.webp";
import foto20 from "../assets/img/prtoflio/photo_29_2025-01-14_06-34-20.webp";
import foto21 from "../assets/img/prtoflio/photo_15_2025-01-14_06-34-20.webp";
import foto22 from "../assets/img/prtoflio/photo_34_2025-01-14_06-34-20.webp";

function Portfolio() {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState(".filter-organizing");

  // Ref to store the Isotope instance
  const isotopeInstance = useRef(null);

  // Portfolio items
  const portfolioItems = [
    { filter: "filter-organizing", img: foto2, title: "organizing 1" },
    { filter: "filter-organizing", img: foto3, title: "organizing 2" },
    { filter: "filter-organizing", img: foto4, title: "organizing 3" },
    {
      filter: "filter-organizing",
      img: foto5,
      title: "organizing 4",
    },
    // {
    //   filter: "filter-organizing",
    //   img: foto6,
    //   title: "organizing 5",
    // },
    {
      filter: "filter-events",
      img: foto7,
      title: "events 1",
    },
    {
      filter: "filter-events",
      img: foto8,
      title: "events 2",
    },
    {
      filter: "filter-events",
      img: foto9,
      title: "events 3",
    },
    {
      filter: "filter-events",
      img: foto10,
      title: "events 4",
    },
    {
      filter: "filter-events",
      img: foto11,
      title: "events 5",
    },
    {
      filter: "filter-conference",
      img: foto12,
      title: "Conference 1",
    },
    {
      filter: "filter-conference",
      img: foto13,
      title: "Conference 2",
    },
    {
      filter: "filter-conference",
      img: foto14,
      title: "Conference 3",
    },
    {
      filter: "filter-conference",
      img: foto15,
      title: "Conference 4",
    },
    {
      filter: "filter-conference",
      img: foto16,
      title: "Conference 5",
    },
    {
      filter: "filter-entertainment",
      img: foto17,
      title: "Meeting 1",
    },
    {
      filter: "filter-entertainment",
      img: foto18,
      title: "Meeting 2",
    },
    {
      filter: "filter-entertainment",
      img: foto20,
      title: "Meeting 3",
    },
    {
      filter: "filter-entertainment",
      img: foto21,
      title: "Meeting 4",
    },
    {
      filter: "filter-entertainment",
      img: foto22,
      title: "Meeting 5",
    },
    {
      filter: "filter-youtube",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "YouTube Video 1",
    },
    {
      filter: "filter-youtube",
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      title: "YouTube Video 2",
    },
    {
      filter: "filter-youtube",
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "YouTube Video 3",
    },
    {
      filter: "filter-youtube",
      video: "https://www.youtube.com/embed/2Vv-BfVoq4g",
      title: "YouTube Video 4",
    },
    // ... (other items)
  ];

  // Initialize Isotope on component mount
  useEffect(() => {
    const imgLoad = imagesLoaded(".isotope-container", { background: true });

    imgLoad.on("done", () => {
      // Initialize Isotope
      isotopeInstance.current = new Isotope(".isotope-container", {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: ".filter-organizing",
      });
    });

    // Cleanup function to destroy Isotope on unmount
    return () => {
      if (isotopeInstance.current) {
        isotopeInstance.current.destroy();
      }
    };
  }, []);

  // Update Isotope filter when the active filter changes
  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter: activeFilter });
    }
  }, [activeFilter]);

  // Handle filter button click
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title proto" data-aos="fade-up">
        <span className="span-title">Portfolio</span>
        <h2>Portfolio</h2>
        <div className="underline"></div>
        <p>Explore our diverse portfolio of events and moments.</p>
      </div>

      <div className="container">
        {/* <ul className="portfolio-filters isotope-filters" data-aos="fade-up">
          <li
            onClick={() => handleFilterChange(".filter-organizing")}
            className={
              activeFilter === ".filter-organizing" ? "filter-active" : ""
            }
          >
            Organizing
          </li>
          <li
            onClick={() => handleFilterChange(".filter-events")}
            className={activeFilter === ".filter-events" ? "filter-active" : ""}
          >
            Events
          </li>
          <li
            onClick={() => handleFilterChange(".filter-conference")}
            className={
              activeFilter === ".filter-conference" ? "filter-active" : ""
            }
          >
            Conference
          </li>
          <li
            onClick={() => handleFilterChange(".filter-entertainment")}
            className={
              activeFilter === ".filter-entertainment" ? "filter-active" : ""
            }
          >
            Entertainment
          </li>
        </ul> */}
        <ul className="portfolio-filters isotope-filters" data-aos="fade-up">
          {/* Existing filters */}
          <li
            onClick={() => handleFilterChange(".filter-organizing")}
            className={
              activeFilter === ".filter-organizing" ? "filter-active" : ""
            }
          >
            Organizing
          </li>
          <li
            onClick={() => handleFilterChange(".filter-events")}
            className={activeFilter === ".filter-events" ? "filter-active" : ""}
          >
            Events
          </li>
          <li
            onClick={() => handleFilterChange(".filter-conference")}
            className={
              activeFilter === ".filter-conference" ? "filter-active" : ""
            }
          >
            Conference
          </li>
          <li
            onClick={() => handleFilterChange(".filter-entertainment")}
            className={
              activeFilter === ".filter-entertainment" ? "filter-active" : ""
            }
          >
            Entertainment
          </li>
          {/* <li
            onClick={() => handleFilterChange(".filter-youtube")}
            className={
              activeFilter === ".filter-youtube" ? "filter-active" : ""
            }
          >
            YouTube
          </li> */}
        </ul>

        {/* <div className="row gy-4 isotope-container">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
            >
              <img src={item.img} className="img-fluid" alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <a
                  href={item.img}
                  data-gallery={`portfolio-gallery-${item.filter}`}
                  className="glightbox preview-link"
                  title={item.title}
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          ))}
        </div> */}
        <div className="row gy-4 isotope-container">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
            >
              {item.img ? (
                <img src={item.img} className="img-fluid" alt={item.title} />
              ) : (
                <iframe
                  src={item.video}
                  className="img-fluid"
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <div className="portfolio-info">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
