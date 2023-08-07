import React from "react";
import PropTypes from "prop-types";

interface SpecialtyBoxProps {
  color: string;
  title: string;
  desc: string;
}

const SpecialtyBox: React.FC<SpecialtyBoxProps> = ({ color, title, desc }) => {
  return (
    <div className="container w-35">
      <div
        className="col text-left text-white"
        style={{ borderRadius: "1em", overflow: "hidden" }}
      >
        <div className="row-md">
          <div className="p-1 px-3 my-0" style={{ backgroundColor: color }}>
            <h2
              className="text-white my-0"
              style={{
                fontWeight: "bold",
              }}
            >
              {title}
            </h2>
          </div>
          <div style={{ backgroundColor: "#333638" }}>
            <p className="p-4 my-0" style={{ fontWeight: "bold" }}>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SpecialtyBox.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SpecialtyBox;
