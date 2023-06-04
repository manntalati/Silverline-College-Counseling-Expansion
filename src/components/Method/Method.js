import React from "react";
import Tutors from "./Tutors";
import TutoringSystem from "./TutoringSystem";
import SilverlineSpecialties from "./SilverlineSpecialties";

const Method = () => {
	return (
		<>
			<div style={{ backgroundColor: "#181A1B" }}>
				<TutoringSystem />
				<Tutors />
				<SilverlineSpecialties />
			</div>
		</>
	);
};

export default Method;
