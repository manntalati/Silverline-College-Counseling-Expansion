import React from "react";
import tutoringImg from "../../images/services/tutoring.webp";

const FoundingIdea: React.FC = () => {
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
    marginTop: "50px",
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
    marginTop: "50px",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h4 style={subHeaderStyle} data-aos="fade-up">
          OUR FOUNDING IDEA
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
        Extracurricular Programs
        </h1>
        <p data-aos="fade-up">
        We offer specialized extracurricular programs led by students who are top performers in each activity to aid students in their success.
        </p>
      </div>
      <img src={tutoringImg} alt="Tutoring" style={imageStyle} />
    </div>
  );
};

export default FoundingIdea;
