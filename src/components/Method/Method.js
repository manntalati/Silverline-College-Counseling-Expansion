import React from "react";
import SpecialtyBox from "./SpecialtyBox";
import Tutors from "./Tutors";
import TutoringSystem from "./TutoringSystem";
import SilverlineSpecialties from "./SilverlineSpecialties";

const Method = () => {
	return (
		<>
			<div style={{ backgroundColor: "#181A1B" }}>
				<SpecialtyBox
					color={"#FF5722"}
					title={"Test title"}
					desc={"lorem ipsum"}
				/>
				<TutoringSystem/>
				<Tutors/>
				<SilverlineSpecialties/>
			</div>
		</>
	);
};

export default Method;
