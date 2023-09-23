import React from "react";
import tom from "../images/Home/lectures/tom.webp";
import emily from "../images/Home/lectures/emily.webp";
import vishant from "../images/Home/lectures/vishant.webp";
import shivani from "../images/Home/lectures/shivani.webp";

const Lectures: React.FC = () => {
  const lectureStyle: React.CSSProperties = {
    marginBottom: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#181A1B",
  };

  const imageStyle: React.CSSProperties = {
    width: "150px",
    height: "200px",
    borderRadius: "50%",
  };

  const lectureInfoStyle: React.CSSProperties = {
    flex: "1",
    marginLeft: "30px",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#EAEAEA",
  };

  const lecturerNameStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const designationStyle: React.CSSProperties = {
    color: "royalblue",
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const overviewStyle: React.CSSProperties = {
    color: "#AFA99E",
    marginBottom: "10px",
  };

  const dateStyle: React.CSSProperties = {
    color: "#AFA99E",
  };

  return (
    <div className="section section-3" style={{ background: "#181A1B" }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-12 text-center mb-0" data-aos="fade-up">
            <span className="subheading">Lectures</span>
            <h2 className="heading mb-3">Our Past Lectures</h2>
          </div>
          <div
            className="col-lg-12 text-md-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="destination">
              <div className="mt-3" style={lectureStyle}>
                <a href="#" target="_blank" style={{ background: "none" }}>
                  <img
                    src={tom}
                    alt="Tom"
                    className="img-fluid"
                    style={imageStyle}
                  />
                </a>
                <div style={lectureInfoStyle}>
                  <h5 style={lecturerNameStyle}>Tom Campbell</h5>
                  <div style={designationStyle}>
                    Pomona Admissions Officer
                  </div>
                  <div style={overviewStyle}>
                    <p>
                    Mr. Campbell answered attendees' questions live through Zoom about the admissions process. This lecture gave many high school students insight into the perspective of an admissions officer
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="mt-4" style={lectureStyle}>
                <a href="#" target="_blank" style={{ background: "none" }}>
                  <img
                    src={emily}
                    alt="Emily"
                    className="img-fluid"
                    style={imageStyle}
                  />
                </a>
                <div style={lectureInfoStyle}>
                  <h5 style={lecturerNameStyle}>Emily Hanscom</h5>
                  <div style={designationStyle}>Junior @ Marist College</div>
                  <div style={overviewStyle}>
                    <p>
                    Emily joined us to talk about the college application process. The main focus of her lecture was figuring out the college application in terms of finances. 
                    She explained the different financial avenues to achieve higher education and how to make college as affordable as possible
                    </p>

                  </div>
                </div>
              </div>
              <div className="mt-4" style={lectureStyle}>
                <a href="#" target="_blank" style={{ background: "none" }}>
                  <img
                    src={vishant}
                    alt="Vishant"
                    className="img-fluid"
                    style={imageStyle}
                  />
                </a>
                <div style={lectureInfoStyle}>
                  <h5 style={lecturerNameStyle}>Vishant Raajkumar</h5>
                  <div style={designationStyle}>
                    Freshman @ Carnegie Mellon University
                  </div>
                  <div style={overviewStyle}>
                    <p>
                    Vishant’s lecture focused on optimizing your college application by centering it around a common theme that reflects you as a person, and the activities that you did
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
