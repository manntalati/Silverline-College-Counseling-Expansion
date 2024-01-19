import React from "react";
import lectureImg from "../../images/services/lectu1res 2.webp";
import { useTheme } from "../ThemeContext"

const CommunityEvents: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); 

  const styles: { [key: string]: React.CSSProperties } = {
    communityeventsDarkContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#181A1B",
    },
    communityeventsLightContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#D6D3CD",
    },
    communityeventsDarkText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "white",
      marginRight: "50px",
    },
    communityeventsLightText: {
      flex: "1",
      padding: "40px",
      fontSize: "1.1rem",
      fontWeight: "200",
      color: "black",
      marginRight: "50px",
    },
    communityeventsSubHeader: {
      fontSize: "18px",
      textTransform: "uppercase",
      color: "#918CA1",
      fontWeight: "700",
    },
    communityeventsDarkHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "white",
    },
    communityeventsLightHeader: {
      fontSize: "46px",
      fontWeight: "bold",
      color: "black",
    },
    communityeventsImage: {
      flex: "1",
      height: "auto",
      maxWidth: "40%",
      marginLeft: "50px",
    },
  };

  return (
    <div style={theme === "#181A1B" ? styles.communityeventsDarkContainer : styles.communityeventsLightContainer}>
      <img src={lectureImg} alt="Lecture" style={styles.communityeventsImage} />
      <div style={theme === "#181A1B" ? styles.communityeventsDarkText : styles.communityeventsLightText}>
        <h4 style={styles.communityeventsSubHeader} data-aos="fade-up">
          FREE RESOURCES
        </h4>
        <h1 style={theme === "#181A1B" ? styles.communityeventsDarkHeader : styles.communityeventsLightHeader} data-aos="fade-up">
          Content
        </h1>
        <p data-aos="fade-up">
        Silverline has constant educational content to keep students up to date with news, events, and things they need to know revolving around their extracurriculars
        </p>
      </div>
    </div>
  );
};

export default CommunityEvents;
