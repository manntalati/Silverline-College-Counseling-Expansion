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
                      Our most recent lecture was by Pomona admissions
                      officer Tom Campbell. In the questions and answer
                      discussion, Tom answered attendees' questions live
                      through Zoom about the admissions process. Overall,
                      this lecture garnered great interest because it gave
                      high schoolers insight into the perspective of an
                      admissions officer.
                    </p>
                    <p>Date: <span style={dateStyle}>8/25/22</span></p>
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
                      Emily Hanscom, a junior at Marist College, joined us
                      for our third lecture. The main focus of her lecture
                      was figuring out the college application in terms of
                      finances. For example, she explained the different
                      financial avenues to achieve higher education.
                    </p>
                    <p>Date: <span style={dateStyle}>8/19/22</span></p>
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
                      Our second lecture was with Vishant Raajkumar – a
                      rising freshman at Carnegie Mellon University.
                      Vishant spoke about the college admissions process
                      but focused more on the most optimal ways to frame an
                      application.
                    </p>
                    <p>Date: <span style={dateStyle}>8/14/22</span></p>
                  </div>
                </div>
              </div>
              <div className="mt-4" style={lectureStyle}>
                <a href="#" target="_blank" style={{ background: "none" }}>
                  <img
                    src={shivani}
                    alt="Shivani"
                    className="img-fluid"
                    style={imageStyle}
                  />
                </a>
                <div style={lectureInfoStyle}>
                  <h5 style={lecturerNameStyle}>Shivanni Satish</h5>
                  <div style={designationStyle}>
                    Freshman @ University of Texas Dallas
                  </div>
                  <div style={overviewStyle}>
                    <p>
                      Our first lecture was with University of Dallas
                      freshman Shivanni Satish. During this lecture, she
                      spoke about tips for the Common Application and her
                      own experience with it. This lecture received a fair
                      amount of attention from Silverline students because
                      it thoroughly explained how to be successful during
                      the college process.
                    </p>
                    <p>Date: <span style={dateStyle}>8/13/22</span></p>
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
