import React from "react";
import { Hobby, Member } from "./Team";

const TeamCard: React.FC<Member["attributes"]> = ({
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
  if (showHobbies) {
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
          {showLinkedin && (
            <a
              href={linkedin}
              target="_blank"
              style={{ backgroundColor: "transparent" }}
              className="text-center"
            >
              <img
                src={"http://localhost:1337" + img.data[0].attributes.url}
                alt={name}
                className="img-fluid"
              />
            </a>
          )}
          <div className=" m-body">
            <h5 style={{ textAlign: "center" }}>{name}</h5>
            <p>{description}</p>
            {showEducation && (
              <p>
                Education: <br />
                <br /> <span style={{ color: "#AFA99E" }}>{education}</span>
              </p>
            )}
            {showHobbies && (
              <>
                <p>Hobbies</p>
                <ul className="text-white py-3 my-0">{hobbiesLi}</ul>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
