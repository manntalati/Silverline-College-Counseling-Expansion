import React from "react";
import SpecialtyBox from "./SpecialtyBox";
import Tutors from "./Tutors";

const Method = () => {
	return (
		<>
			<div style={{ backgroundColor: "#181A1B" }}>
				<SpecialtyBox
					color={"#FF5722"}
					title={"Test title"}
					desc={"lorem ipsum"}
				/>
				<Tutors/>
			</div>
		</>
	);
};

export default Method;
