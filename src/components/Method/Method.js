import React from "react";
import Tutors from "./Tutors";
import TutoringSystem from "./TutoringSystem";
import SilverlineSpecialties from "./SilverlineSpecialties";
import Footer from "../Footer";

const Method = () => {
	return (
		<>
			<div style={{ backgroundColor: "#181A1B" }}>
				<TutoringSystem />
				<Tutors />
				<SilverlineSpecialties />
			</div>
			<Footer />
		</>
	);
};

export default Method;
