import React from "react";
import lectureImg from "../../images/services/lectu1res 2.webp";

const CommunityEvents: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#181A1B",
  };

  const textStyle: React.CSSProperties = {
    flex: "1",
    padding: "40px",
    fontSize: "1.1rem",
    fontWeight: "200",
    color: "#EAEAEA",
    marginRight: "50px",
  };

  const subHeaderStyle: React.CSSProperties = {
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#918CA1",
    fontWeight: "700",
  };

  const headerStyle: React.CSSProperties = {
    fontSize: "46px",
    fontWeight: "bold",
    color: "white",
  };

  const imageStyle: React.CSSProperties = {
    flex: "1",
    height: "auto",
    maxWidth: "40%",
    marginLeft: "50px",
  };

  return (
    <div style={containerStyle}>
      <img src={lectureImg} alt="Lecture" style={imageStyle} />
      <div style={textStyle}>
        <h4 style={subHeaderStyle} data-aos="fade-up">
          FREE RESOURCES
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
        Educational Blogs and Articles
        </h1>
        <p data-aos="fade-up">
        Our Content Writing team authors a plethora of valuable articles which cover a range of topics - from college admissions to niche advice regarding extracurriculars. We publish weekly blogs and articles which are free to access for Silverline Participants.

        </p>
      </div>
    </div>
  );
};

export default CommunityEvents;
