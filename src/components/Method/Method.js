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
					desc={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
				/>
				<Tutors />
			</div>
		</>
	);
};

export default Method;
