import React from "react";
import shortsImg from "../../images/services/shor1ts.webp";
import { useTheme } from "../ThemeContext";

const SocialServices: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  const styles: { [key: string]: React.CSSProperties } = {
    socialservicesDarkContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#181A1B",
    },
    socialservicesLightContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#D6D3CD",
    },
    socialservicesDarkText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "white",
      marginRight: "50px",
    },
    socialservicesLightText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "black",
      marginRight: "50px",
    },
    socialservicesSubHeader: {
      fontSize: "18px",
      textTransform: "uppercase",
      color: "#918CA1",
      fontWeight: "700",
    },
    socialservicesDarkHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "white",
    },
    socialservicesLightHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "black",
    },
    socialservicesImage: {
      flex: "1",
      height: "auto",
      maxWidth: "40%",
      marginLeft: "50px",
    },
  };

  return (
    <div style={theme === "dark" ? styles.socialservicesDarkContainer : styles.socialservicesLightContainer}>
      <img
        src={shortsImg}
        alt="Shorts"
        style={{ ...styles.socialservicesImage, animation: "fade-up" }}
        data-aos="fade-up"
      />
      <div style={{ ...theme === "dark" ? styles.socialservicesDarkText : styles.socialservicesLightText, animation: "fade-up" }} data-aos="fade-up">
        <h4 style={styles.socialservicesSubHeader} data-aos="fade-up">
          SOCIAL SERVICES
        </h4>
        <h1 style={theme === "dark" ? styles.socialservicesDarkHeader : styles.socialservicesLightHeader} data-aos="fade-up">
          Youtube Shorts
        </h1>
        <p data-aos="fade-up">
          YouTube videos are another outlet for our students, which are
          specifically aimed towards seniors preparing for college. Our goal
          with these sets of videos is to assist students in understanding the
          approach for college applications and how they should tackle them. In
          comparison to our other social media platforms, we dedicate the
          YouTube space to be strictly for educational content.
        </p>
      </div>
    </div>
  );
};

export default SocialServices;
