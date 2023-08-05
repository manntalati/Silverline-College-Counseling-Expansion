import React from "react";
import PropTypes from "prop-types";

interface Hobby {
  id: number;
  attributes: {
    hobby: string;
  };
}

const TeamCard: React.FC = ({
  name,
  img,
  description,
  education,
  hobbies,
  linkedin,
}) => {
  let showEducation: boolean = false;
  let showHobbies: boolean = false;
  let showLinkedin: boolean = false;
  if (education && education.length > 0) {
    showEducation = true;
  }
  if (hobbies.data && hobbies.data.length > 0) {
    showHobbies = true;
  }

  if (linkedin && linkedin.length > 0) {
    showLinkedin = true;
  }

  const hobbiesLi: JSX.Element[] = [];
  if (showHobbies === true) {
    hobbies.data.forEach((hobby: Hobby) =>
      hobbiesLi.push(
        <li className="mx-4" key={hobby.id}>
          {hobby.attributes.hobby}
        </li>,
      ),
    );
  }

  return (
    <>
      <div
        className="col-6 col-sm-6 col-md-6 col-lg-3 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className=" media-entry media-entry-original media-size0">
          {showLinkedin === true ? (
            <a
              href={linkedin}
              target="0"
              style={{ backgroundColor: "transparent" }}
              className="text-center"
            >
              <img
                src={"http://localhost:1337" + img.data[0].attributes.url}
                alt={name}
                className="img-fluid"
              />
            </a>
          ) : null}
          <div className=" m-body">
            <h5 style={{ textAlign: "center" }}>{name}</h5>
            <p>{description}</p>
            {showEducation === true ? (
              <p>
                Education: <br />
                <br /> <span style={{ color: "#AFA99E" }}>{education}</span>
              </p>
            ) : null}
            {showHobbies === true ? (
              <>
                <p>Hobbies</p>
                <ul className="text-white py-3 my-0">{hobbiesLi}</ul>{" "}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.object,
  desc: PropTypes.string,
  education: PropTypes.string,
  hobbies: PropTypes.object,
  linkedin: PropTypes.string,
};

export default TeamCard;
