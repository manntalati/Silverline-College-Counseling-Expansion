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
			<div className="card bg-transparent text-white">
				<div className="card-body">
					<h2
						className="card-title p-2"
						style={{ backgroundColor: color }}
					>
						{title}
					</h2>
					<p
						className="card-text text-center"
						style={{ backgroundColor: "#333638" }}
					>
						{desc}
					</p>
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
