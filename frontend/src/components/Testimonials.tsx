import React, { useState } from "react";
import anonymous from "../../images/anonymous.webp";
import { useTheme } from "./ThemeContext";

interface Testimonial {
	name: string;
	des: string;
	content: string;
}

const TestimonialItem: React.FC<Testimonial> = ({ name, des, content }) => {
	const { theme, toggleTheme } = useTheme();

	const styles: { [key: string]: React.CSSProperties} = {
		testimonialsNameContainer: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: "10px",
			width: "100%",
		},
		testimonialsImage: {
			borderRadius: "50%"
		},
		testimonialsNameDark: {
			color: "white",
			fontWeight: 500,
			marginBottom: "-0.2rem",
		},
		testimonialsNameLight: {
			color: "black",
			fontWeight: 500,
			marginBottom: "-0.2rem",
		},
		testimonialsDesDark: {
			color: "#D6D3CD !important",
		},
		testimonialsDesLight: {
			color: "#181A1B !important",
		},
		testimonialsQuoteIconDark: {
			fontSize: "6.5rem",
			color: "white",
			fontFamily: "Work Sans sans-serif",
			position: "relative",
			marginTop: "-2rem",
			marginBottom: "1rem",
		},
		testimonialsQuoteIconLight: {
			fontSize: "6.5rem",
			color: "black",
			fontFamily: "Work Sans sans-serif",
			position: "relative",
			marginTop: "-2rem",
			marginBottom: "1rem",
		},
		testimonialsQuoteDark: {
			color: "#D6D3CD",
			position: "relative",
			top: "-110px",
			fontFamily: "Work Sans sans-serif",
			width: "80%",
			textAlign: "center",
		},
		testimonialsQuoteLight: {
			color: "#181A1B",
			position: "relative",
			top: "-110px",
			fontFamily: "Work Sans sans-serif",
			width: "80%",
			textAlign: "center",
		},
	}

	return (
		<div className={`${styles.testimonialsNameContainer}`}>
			<img
				src={anonymous}
				height={75}
				width={75}
				className={`${styles.testimonialsImage}`}
			/>
			<h3
				className={`${
					theme === "#181A1B" ? styles.testimonialsNameDark : styles.testimonialsNameLight
				}`}
			>
				{name}
			</h3>
			<p className={`${theme === "#181A1B" ? styles.testimonialsDesDark : styles.testimonialsDesLight}`}>
				{des}
			</p>
			<p
				className={`${
					theme === "#181A1B"
						? styles.testimonialsQuoteIconDark
						: styles.testimonialsQuoteIconLight
				}`}
			>
				“
			</p>
			<p
				className={`${
					theme === "#181A1B" ? styles.testimonialsQuoteDark : styles.testimonialsQuoteLight
				}`}
			>
				{content}
			</p>
		</div>
	);
};

const content: Testimonial[] = [
	{
		name: "Rithvik",
		des: "High School Sophomore",
		content: "“ Place review here”",
	},
	{
		name: "Shanti",
		des: "A Parent",
		content: "“Place review here”",
	},
	{
		name: "Li Jian",
		des: "8th Grader",
		content: "“Place review here”",
	},
	{
		name: "Rithin",
		des: "High School Junior",
		content: "“Place review here”",
	},
];

const Testimonials: React.FC = () => {
	const [val, setVal] = useState<number>(0);
	const { theme, toggleTheme } = useTheme();

	const styles: { [key: string]: React.CSSProperties} = {
		testimonialsCenter: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
			justifyContent: "center",
		},
		testimonialsOuterDivDark: {
			backgroundColor: "#181A1B",
			width: "100%",
			padding: "7rem",
			display: "flex",
			flexDirection: "row",
		},
		testimonialsOuterDivLight: {
			backgroundColor: "#D6D3CD",
			width: "100%",
			padding: "7rem",
			display: "flex",
			flexDirection: "row",
		},
		testimonialsInnerDiv: {
			width: "50%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
		testimonialsSubHeader: {
			fontSize: "1rem",
			textTransform: "uppercase",
			fontWeight: 700,
			color: "#9784A1",
		},
		testimonialsTitleHeaderDark: {
			fontSize: "1.5rem",
			textTransform: "uppercase",
			fontWeight: 600,
			color: "white !important",
			paddingBottom: "1rem",
		},
		testimonialsTitleHeaderLight: {
			fontSize: "1.5rem",
			textTransform: "uppercase",
			fontWeight: 600,
			color: "black !important",
			paddingBottom: "1rem",
		},
		testimonialsOverflowContainer: {
			maxWidth: "70%",
			overflow: "hidden",
		},
		testimonialsHeaderDark: {
			color: "white !important",
			fontWeight: "600 !important",
		},
		testimonialsHeaderLight: {
			color: "black !important",
			fontWeight: "600 !important",
		},
		testimonialsDynamicSlider: {
			display: "flex",
			flexDirection: "row",
			flexWrap: "nowrap",
			borderColor: "white",
			borderWidth: "2px",
			width: "calc(var(--content-length) * 100%)",
			overflow: "hidden",
			position: "relative",
			left: "calc(-1 * var(--val) * 100%)",
			transition: "0.35s",
		},
		testimonialsSelectorContainer: {
			display: "flex",
			flexDirection: "row",
			gap: "10px",
			position: "relative",
			top: "-110px",
		},
		testimonialsButtonDark: {
			border: "3px solid white",
			width: "20px",
			height: "20px",
			transition: "0.35s",
			borderRadius: "50%",
			aspectRatio: 1 / 1,
		},
		testimonialsButtonLight: {
			border: "3px solid black",
			width: "20px",
			height: "20px",
			transition: "0.35s",
			borderRadius: "50%",
			aspectRatio: 1 / 1,
		},
		testimonialsActiveButtonDark: {
			backgroundColor: "white",
		},
		testimonialsActiveButtonLight: {
			backgroundColor: "black",
		},
		testimonialsInactiveButton: {
			backgroundColor: "rgba(145, 140, 161, 0)",
		},
	}

	return (
		<div
			className={`
				${theme === "#181A1B" ? styles.testimonialsOuterDivDark : styles.testimonialsOuterDivLight}`}
		>
			<div className={`${styles.testimonialsCenter}`}>
				<div className={`${styles.testimonialsInnerDiv}`}>
					<p className={`${styles.testimonialsSubHeader}`}>Satisfied Students</p>
					<h1
						className={`${
							theme === "#181A1B"
								? styles.testimonialsTitleHeaderDark
								: styles.testimonialsTitleHeaderLight
						}`}
					>
						Testimonials
					</h1>
					<div className={`${styles.testimonialsOverflowContainer}`}>
						<div
							className={`${styles.testimonialsDynamicSlider}`}
							// cannot avoid this style
							style={
								{
									"--content-length": content.length,
									"--val": val,
								} as any
							}
						>
							{content.map((c, idx) => (
								<TestimonialItem {...c} key={idx} />
							))}
						</div>
					</div>
					<div className={`${styles.testimonialsSelectorContainer}`}>
						{content.map((c, idx) => (
							<div
								key={idx}
								onClick={() => setVal(idx)}
								className={`${
									theme === "#181A1B"
										? styles.testimonialsButtonDark
										: styles.testimonialsButtonLight
								} ${
									idx === val
										? theme === "#181A1B"
											? styles.testimonialsActiveButtonDark
											: styles.testimonialsActiveButtonLight
										: styles.testimonialsInactiveButton
								}`}
							/>
						))}
					</div>
				</div>
			</div>
			<p
			className="button"
			data-aos="fade up"
			data-aos-delay="300"
			>
				<a href="/reviews">View More Reviews</a>
			</p>
		</div>
	);
};

export default Testimonials;
