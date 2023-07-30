import React from "react";

function FAQ() {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#181A1B",
  };

  const textStyle = {
    flex: "1",
    padding: "40px",
    fontSize: "1.1rem",
    fontWeight: "200",
    color: "#EAEAEA",
    marginRight: "50px",
  };

  const subHeaderStyle = {
    fontSize: "18px",
    textTransform: "uppercase",
    color: "#918CA1",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const headerStyle = {
    fontSize: "46px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "30px", 
  };

  const questionStyle = {
    marginBottom: "15px", 
  };

  const answerStyle = {
    marginBottom: "30px", 
  };

  return (
    <div style={containerStyle}>
      <div className="container" style={textStyle}>
        <h1 className="title" data-aos="fade-up" style={headerStyle}>
          Frequently Asked Questions
        </h1>
        <h2 className="sub-heading" data-aos="fade-up" data-aos-delay="100" style={subHeaderStyle}>
          {/* Add sub-heading text here if necessary */}
        </h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="question" style={questionStyle}>1. How do I signup for tutoring?</h3>
          <p className="answer" data-testid="faq-answer" style={answerStyle}>
            {/* add the link as necessary*/}
            Fill out the <a href="">student form</a> located under "get
            involved," and feel free to join our Discord server to learn
            more.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="question" style={questionStyle}>2. Where does tutoring happen?</h3>
          <p className="answer" data-testid="faq-answer" style={answerStyle}>
            Tutoring sessions take place online and can be conducted through
            zoom or other video conference platforms. If you are a member of
            our Discord server, the voice channel feature will often be used
            by our tutors.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="question" style={questionStyle}>3. Do I have to pay for tutoring?</h3>
          <p className="answer" data-testid="faq-answer" style={answerStyle}>
            No! Silverline is a nonprofit dedicated to ensuring that
            students receive tutoring for free. Tutors earn volunteer hours
            in exchange for their help. However, students can earn from our
            program as we often host trivia nights with a cash prize thanks
            to our sponsors.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="question" style={questionStyle}>4. How do I signup to be a tutor?</h3>
          <p className="answer" data-testid="faq-answer" style={answerStyle}>
            {/* add the link as necessary this description from old website*/}
            Fill out the <a href="">tutor form</a> located under "get
            involved," and we will reach out to you. Be prepared to answer
            questions during an interview as well as a short 5-10 minute
            lesson to demonstrate your skills in teaching. Afterwards, we
            will determine if you are suited to teach and the specific
            subjects.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <h3 className="question" style={questionStyle}>
            5. What is the experience of the tutors?
          </h3>
          <p className="answer" data-testid="faq-answer" style={answerStyle}>
            Most of our tutors are high school senior or college students.
            However, some of our tutors are teachers or former teachers.
            Regardless of the tutor, we guarantee that all of our tutors are
            qualified.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="700">
          <h3 className="question" style={questionStyle}>6. Who runs Silverline Tutoring?</h3>
          {/* add the link as necessary this description from old website*/}
          <p className="answer" data-testid="faq-answer" style={answerStyle}>
            Silverline tutoring is run by high schoolers and college
            students. Our full team can be found{" "}
            <a href="team.html">here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
