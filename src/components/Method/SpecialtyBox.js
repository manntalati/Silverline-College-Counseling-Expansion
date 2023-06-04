import PropTypes from "prop-types";

const SpecialtyBox = ({ color, title, desc }) => {
	return (
		// <button
		// 	onClick={onClick}
		// 	style={{ backgroundColor: color }}
		// 	className="btn"
		// >
		// 	{text}
		// </button>
		<div className="container w-35">
			<div
				className="col text-left bg-white text-white border-white"
				style={{ borderRadius: "1em", overflow: "hidden" }}
			>
				<div
					className="row-md bg-danger"
					// style={{ borderRadius: "20em", overflow: "hidden" }}
				>
					<div
						className="p-1 px-3 my-0"
						style={{ backgroundColor: color }}
					>
						<h2 className="text-white">{title}</h2>
					</div>
					<div style={{ backgroundColor: "#333638" }}>
						<p className="p-4 my-0" style={{ fontWeight: 600 }}>
							{desc}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

SpecialtyBox.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	desc: PropTypes.string,
};

export default SpecialtyBox;
