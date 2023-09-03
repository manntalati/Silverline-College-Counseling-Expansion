import React from "react";
import eng from "../images/Home/eng.webp";
import flexibile from "../images/Home/flexibile.webp";
import community from "../images/Home/community.webp";
import quality from "../images/Home/quality.webp";

const ServicesSection: React.FC = () => {
  return (
    <div className="section section-3" style={{ background: "#181A1B" }}>
      <div className="container">
        <div className="row align-items-center justify-content-between  mb-5">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="subheading">Services</span>
            <h2 className="heading mb-3">A Plethora of Resources</h2>

          </div>
          <div
            className="col-lg-5 text-md-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div id="destination-controls" className="text-center pt-4">
              <span className="prev me-3" data-controls="prev">
                <svg
                  width="48"
                  height="32"
                  viewBox="0 0 48 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M47.5 16L3.5 16" stroke="#5271FF" strokeWidth="2" />
                  <path
                    d="M17.25 1.11246L2 16L17.25 30.8875"
                    stroke="#5271FF"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span className="next" data-controls="next">
                <svg
                  width="64"
                  height="36"
                  viewBox="0 0 64 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="-8.74228e-08"
                    y1="18"
                    x2="61"
                    y2="18"
                    stroke="#5271FF"
                    strokeWidth="2"
                  />
                  <path
                    d="M45.25 34.8875L62.5 18L45.25 1.1125"
                    stroke="#5271FF"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
            <div className="destination-slider-wrap">
              <div className="destination-slider">
                <div className="destination">
                  <div className="thumb">
                    <img
                      src={eng}
                      alt="icon for Versatile"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mt-4">
                    <h3>Extracurricular Programs</h3>
                    <span className="meta">
                    We offer specialized extracurricular programs to aid students in their success.

                    </span>
                  </div>
                </div>
                <div className="destination">
                  <div className="thumb">
                    <img
                      src={flexibile}
                      alt="icon for flexible tutoring"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mt-4">
                    <h3>Education Advisory</h3>
                    <span className="meta">
                    We offer personalized educational advisory to enrich the high school experience of Silverline participants.
                    </span>
                  </div>
                </div>
                <div className="destination">
                  <div className="thumb">
                    <img
                      src={community}
                      alt="icon for community"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mt-4">
                    <h3>Educational Articles</h3>
                    <span className="meta">
                    We offer articles that cover topics ranging from admissions to niche advice in order to provide Silverline participants with free access to resources.
                    </span>
                  </div>
                </div>
                <div className="destination">
                  <div className="thumb">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <p className="my-5" data-aos="fade-up" data-aos-delay="300">
            <a href="services.html" className="btn btn-primary text-lg-center">
              View all services
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
