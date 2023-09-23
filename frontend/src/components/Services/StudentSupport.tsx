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
        Access to Resources
        </h1>
        <p data-aos="fade-up">
        We offer top of the line resources to help students thrive in their activities.

      <div>
  <ul>
    <li>Debate</li>
    <li>Science Olympiad</li>
    <li>Research</li>
    <li>Robotics/FIRST Program</li>
    <li>FBLA/DECA</li>
  </ul>
</div>

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
