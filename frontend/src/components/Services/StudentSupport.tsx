import React from "react";
import resourcesImg from "../../images/services/resources.webp";

const StudentSupport: React.FC = () => {
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
    marginLeft: "50px",
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
    marginRight: "50px",
    marginLeft: "50px",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h4 style={subHeaderStyle} data-aos="fade-up">
          STUDENT SUPPORT
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
        Extracurricular Programs
        </h1>
        <p data-aos="fade-up">
        Our Silverline staff lead valuable and enriching extracurricular programs within the following areas:
        
      <ol>Debate</ol>
      <ol>Science Olympiad</ol>
      <ol>Research</ol>
      <ol>Robotics/FIRST Program</ol>
      <ol>FBLA/DECA</ol>

Each program contains specialized curriculum, materials, and exclusive Discord benefits and categories.

        </p>
      </div>
      <img
        src={resourcesImg}
        alt="Resources"
        style={{ ...imageStyle, animation: "fade-up" }}
        data-aos="fade-up"
      />
    </div>
  );
};

export default StudentSupport;
