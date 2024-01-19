import React from "react";
import { useTheme } from "../ThemeContext";

const Opportunities: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const styles: { [key: string]: React.CSSProperties } = {
		opportunitiesBodyStyle: {
			fontSize: "1.1rem",
      color: "#D6D3CD",
		},
		opportunitiesTitleStyle: {
			fontSize: "2.5rem",
      color: "#918CA1",
		},
	};

  return (
    <div className={`background` + theme}>
      <div className="container">
        <h1 style={styles.opportunitiesTitleStyle} data-aos="fade-up">
          Opportunities
        </h1>
        <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100" />

        <p
          className="my-0"
          style={styles.opportunitiesBodyStyle}
          data-aos="fade-up"
          data-aos-delay="200"
        >
As high schoolers, we acknowledge the difficulty in finding opportunities such as internships or research positions. In our community, we have an “Opportunities” hub that allows students to find positions in these areas. Whenever a new opportunity is posted, students who have signed up to receive notifications will be notified of the posting. In this sense, Silverline is a diverse organization that provides for students beyond just tutoring. Students receive tutoring, but even more, students also have the chance to improve their college applications or resumes, making Silverline the all-in-one community for students.
        </p>
      </div>
    </div>
  );
};

export default Opportunities;
