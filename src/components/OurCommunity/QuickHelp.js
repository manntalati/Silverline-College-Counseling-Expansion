import React from "react";

const QuickHelp = () => {
	const bodyStyle = {
		fontSize: "1.1rem",
		fontWeight: "bold",
		color: "#D6D3CD",
	};
	const titleStyle = {
		fontSize: "2.5rem",
		fontWeight: "bold",
		color: "#918CA1",
	};
	return (
		<div style={{ backgroundColor: "#181A1B", padding: "7rem" }}>
			<div className="container">
				<h1 style={titleStyle}>Quick Help</h1>
				<p className="my-0" style={bodyStyle}>
          At Silverline, we understand that not everyone has the time to take on dedicated tutoring. In fact, sometimes students only have a one-off question that doesn’t require a full tutoring session. Therefore, our community has 200 helpers in our Discord server readily available to assist students at any time. From asking about a single SAT problem to quick questions in calculus, our community helpers are on-call for members’ needs. Our “Quick Help” service works well because anyone can become a helper. Simply after joining our server, they can indicate interest in being a helper and be assigned to the role. Typically, any question asked in “Quick Help” will be responded to within three hours.
          <br /><br />
          However, “Quick Help” is not for all questions. For broader, more general inquiries, we will suggest that the student receives tutoring via a dedicated tutor. At Silverline, “Quick Help” separates us from other tutoring services. Typically, others only offer long-term services for students; however, here at Silverline, we offer a service to meet the needs of the students without any commitment—one of many reasons leading to our success.
          <br /><br />
          In terms of tutors, Silverline accepts anyone from sophomore year of highschool and above. In the past we have had school teachers helping in our system, meaning that even adults are more than welcome to join our community. Therefore, regardless of age or education, Silverline is an open outlet for all groups whether it be in the form of being a student or a teacher.
        </p>
			</div>
		</div>
	);
};

export default QuickHelp;
