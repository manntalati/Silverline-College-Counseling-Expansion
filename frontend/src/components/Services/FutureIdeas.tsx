import React from "react";
import { useTheme } from "../ThemeContext";

const FutureIdeas: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  const styles: { [key: string]: React.CSSProperties } = {
    futureideasDarkContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#181A1B",
      padding: "40px",
    },
    futureideasLightContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#D6D3CD",
      padding: "40px",
    },
    futureideasDarkText: {
      textAlign: "center",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "white",
      padding: "5px",
      marginLeft: "40px",
      marginRight: "40px",
      marginTop: "50px",
    },
    futureideasLightText: {
      textAlign: "center",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "black",
      padding: "5px",
      marginLeft: "40px",
      marginRight: "40px",
      marginTop: "50px",
    },
    futureideasSubHeader: {
      fontSize: "24px",
      textTransform: "uppercase",
      color: "#918CA1",
      fontWeight: "700",
      margin: "auto",
      width: "50%"
    },
    futureideasDarkHeader: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "white",
    },
    futureideasLightHeader: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "black",
    },
    futureideasButton: {
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
      gap: "30px",
      marginBottom: "30px",
    },
  };

  return (
    <div style={theme === "dark" ? styles.futureideasDarkContainer : styles.futureideasLightContainer}>
      <h2 style={styles.futureideasSubHeader} data-aos="fade-up">
        FUTURE IDEAS
      </h2>
      <h1 style={theme === "dark" ? styles.futureideasDarkHeader : styles.futureideasLightHeader} data-aos="fade-up">
        What's Next?
      </h1>
      <p style={theme === "dark" ? styles.futureideasDarkText : styles.futurueideasLightText} data-aos="fade-up">
        Looking forward, we hope to partner with underfunded schools and provide
        resources and tutoring for students who are looking for extra help.
        Along with that, we plan on eventually expanding our focus to developing
        countries worldwide, providing and distributing curriculum for students
        in underserved areas. Our goal is to solve the educational divide, and
        the only possible way we believe we can truly make an impact is by
        spreading support worldwide. Anyone can help us reach our goal either by
        donating, spreading word in their local districts, or joining the
        organization.
      </p>
      <div style={styles.futureideasButton}>
        <a
          href="downloads/Press_Release.pdf"
          data-aos="fade-up"
          data-aos-delay="100"
          className="btn btn-primary"
        >
          Press Release
        </a>
        <a
          href="https://discord.gg/kD8aMaX2gP"
          data-aos="fade-up"
          data-aos-delay="100"
          className="btn btn-primary"
        >
          Join Us Today
        </a>
      </div>
    </div>
  );
};

export default FutureIdeas;
