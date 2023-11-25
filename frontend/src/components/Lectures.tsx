import React from "react";
import tom from "../images/Home/lectures/tom.webp";
import emily from "../images/Home/lectures/emily.webp";
import vishant from "../images/Home/lectures/vishant.webp";
import { useTheme } from "./ThemeContext";

const Lectures: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	const styles: { [key: string]: React.CSSProperties} = {
		lecturesStyle: {
			marginBottom: "3.125rem",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "1.25rem",
			borderRadius: "0.313px",
		},
		lecturesImageStyle: {
			width: "9.375rem",
			height: "12.5rem",
			borderRadius: "50%",
		},
		lecturesInfoStyle: {
			flex: "1",
			marginLeft: "1.875rem",
			fontWeight: "bold",
			fontSize: "0.75rem",
		},
		lecturesDarkName: {
			textAlign: "center",
			fontSize: "1.5rem",
			fontWeight: "bold",
			color: "white",
		},
		lecturesLightName: {
			textAlign: "center",
			fontSize: "1.5rem",
			fontWeight: "bold",
			color: "black",
		},
		lecturesDesignationStyle: {
			color: "#4d68e1",
			textAlign: "center",
			marginBottom: "0.625rem",
			fontSize: "1.125rem",
			fontWeight: "bold",
		},
		lecturesOverviewStyle: {
			marginBottom: "0.625rem",
		},
		lecturesDarkBackground: {
			backgroundColor: "#181A1B !important",
		},
		lecturesLightBackground: {
			backgroundColor: "#D6D3CD !important",
		},
		lecturesDarkHeader: {
			backgroundColor: "white !important",
		},
		lecturesLightHeader: {
			backgroundColor: "black !important",
		},
		lecturesDarkText: {
			backgroundColor: "white !important",
		},
		lecturesLightText: {
			backgroundColor: "black !important",
		},
	};

	return (
		<div
			className={`${
				theme === "dark" ? styles.lecturesDarkBackground : styles.lecturesLightBackground
			} section section-3`}
		>
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div
						className="col-lg-12 text-center mb-0"
						data-aos="fade-up"
					>
						<span className="subheading">Lectures</span>
						<h2
							className={`heading mb-3 ${
								theme === "dark"
									? styles.lecturesDarkHeader
									: styles.lecturesLightHeader
							}`}
						>
							Our Past Lectures
						</h2>
					</div>
					<div
						className="col-lg-12 text-md-end"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="destination">
							<div className={`mt-3 ${styles.lecturesStyle}`}>
								<a href="#" target="_blank">
									<img
										src={tom}
										alt="Tom"
										className={`img-fluid ${styles.lecturesImageStyle}`}
									/>
								</a>
								<div className={`infoStyle ${styles.lecturesInfoStyle}`}>
									<h5
										className={`name ${
											theme === "dark"
												? styles.lecturesDarkName
												: styles.lecturesLightName
										}`}
									>
										Tom Campbell
									</h5>
									<div className={`designationStyle ${styles.lecturesDesignationStyle}`}>
										Pomona Admissions Officer
									</div>
									<div className={`overviewStyle ${styles.lecturesOverviewStyle}`}>
										<p
											className={`text ${
												theme === "dark"
													? styles.lecturesDarkText
													: styles.lecturesLightText
											}`}
										>
											Mr. Campbell answered attendees'
											questions live through Zoom about
											the admissions process. This lecture
											gave many high school students
											insight into the perspective of an
											admissions officer.
										</p>
									</div>
								</div>
							</div>
							<div className={`style ${styles.lecturesStyle}`}>
								<a href="#" target="_blank">
									<img
										src={emily}
										alt="Emily"
										className={`imageStyle ${styles.lecturesImageStyle}`}
									/>
								</a>
								<div className={`infoStyle ${styles.lecturesInfoStyle}`}>
									<h5
										className={`name ${
											theme === "dark"
												? styles.lecturesDarkName
												: styles.lecturesLightName
										}`}
									>
										Emily Hanscom
									</h5>
									<div className={`designationStyle ${styles.lecturesDesignationStyle}`}>
										Junior @ Marist College
									</div>
									<div className={`overviewStyle ${styles.lecturesOverviewStyle}`}>
										<p
											className={`text ${
												theme === "dark"
													? styles.lecturesDarkText
													: styles.lecturesLightText
											}`}
										>
											Emily joined us to talk about the
											college application process. The
											main focus of her lecture was
											figuring out the college application
											in terms of finances. She explained
											the different financial avenues to
											achieve higher education and how to
											make college as affordable as
											possible.
										</p>
									</div>
								</div>
							</div>
							<div className={`style ${styles.lecturesStyle}`}>
								<a href="#" target="_blank">
									<img
										src={vishant}
										alt="Vishant"
										className={`imageStyle ${styles.lecturesImageStyle}`}
									/>
								</a>
								<div className={`infoStyle ${styles.lecturesInfoStyle}`}>
									<h5
										className={`name ${
											theme === "dark"
												? styles.lecturesDarkName
												: styles.lecturesLightName
										}`}
									>
										Vishant Raajkumar
									</h5>
									<div className={`designationStyle ${styles.lecturesDesignationStyle}`}>
										Freshman @ Carnegie Mellon University
									</div>
									<div className={`overviewStyle ${styles.lecturesOverviewStyle}`}>
										<p
											className={`text ${
												theme === "dark"
													? styles.lecturesDarkText
													: styles.lecturesLightText
											}`}
										>
											Vishant’s lecture focused on
											optimizing your college application
											by centering it around a common
											theme that reflects you as a person,
											and the activities that you did.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lectures;
