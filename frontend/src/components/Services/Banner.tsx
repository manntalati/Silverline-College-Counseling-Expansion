import React from "react";
import bannerImg from "../../images/services/services.webp";
import "aos/dist/aos.css";

const Banner: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    position: "relative",
    marginTop: "64px",
    height: "400px",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(50%)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={bannerStyle}>
      <img src={bannerImg} alt="banner" style={imageStyle} />
      <h1 style={titleStyle} data-aos="fade-up" data-aos-delay="100">
        Our Services
      </h1>
    </div>
  );
};

export default Banner;
