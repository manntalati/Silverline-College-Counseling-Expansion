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
        Educational Advisory
        </h4>
        <h1 style={headerStyle} data-aos="fade-up">
        About Silverline
        </h1>
        <p data-aos="fade-up">
        Silverline Educational Advisory is a 501(c)(3) nonprofit connecting high school students with enriching resources to amplify their extracurricular performance. 
        Founded by college and high school students, this company recognizes the difficulty of navigating high school and helps connect them within our community of 
        over 5000 members worldwide
        </p>
        <p data-aos="fade-up">
        From the difficulties of finding extracurriculars, to the difficulties of succeeding in them, every student has struggled. 
        We want to provide students with the ability to break past these barriers within extracurricular and educational performance.
        </p>
        <p data-aos="fade-up">
        Silverline prides itself on being free and flexible for students all across the globe by creating resources that everyone can learn from.
        This framework has allowed us to serve thousands of students for no charge while maintaining top-notch quality.
        </p>
      </div>
      <img src={tutoringImg} alt="Tutoring" style={imageStyle} />
    </div>
  );
};

export default FoundingIdea;
