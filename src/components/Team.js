import React from "react";

function Team() {
  /*dummy data*/
  const executives = [];
  const board = [];
  const tutors = [];
  const logistics = [];
  return (
    <div className="responsive min-h-screen d-flex flex-column align-items-center justify-content-center bg-dark py-2">
      <section className="relative">
        <div className="md:mx-auto max-w-8xl bg-scroll px-4 sm:px-6">
          <div className="mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="pb-12 text-center md:pb-16">
                <h1
                  className="mb-4 display-2 fw-bold text-white md:display-3"
                  data-aos="zoom-y-out"
                >
                  <span className="text-secondary">The executives</span>
                </h1>
              </div>
              <div className="p-4 rounded-lg  bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
                {executives.map((member, index) => {
                  return (
                    <div key={index} className="">
                      <img
                        className="rounded-circle"
                        width="160px"
                        height="160px"
                        src={member.img}
                        alt="based"
                      />

                      <div className="p-5">
                        <h5
                          className="mb-2 display-4 fw-bold text-white"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.name} ' {member.year} <br /> {member.position}
                        </h5>

                        <p
                          className="mb-3 font-weight-normal text-white-50"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.msg}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pb-12 text-center md:pb-16">
                <h1
                  className="mb-4 display-2 fw-bold text-white md:display-3"
                  data-aos="zoom-y-out"
                >
                  <span className="text-secondary">The Board</span>
                </h1>
              </div>
              <div className="p-4 rounded-lg bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
                {board.map((member, index) => {
                  return (
                    <div key={index} className="">
                      <img
                        className="rounded-circle"
                        width="160px"
                        height="160px"
                        src={member.img}
                        alt="based"
                      />

                      <div className="p-5">
                        <h5
                          className="mb-2 display-4 fw-bold text-white"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.name} ' {member.year} <br /> {member.position}
                        </h5>

                        <p
                          className="mb-3 font-weight-normal text-white-50"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.msg}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pb-12 text-center md:pb-16">
                <h1
                  className="mb-4 display-2 fw-bold text-white md:display-3"
                  data-aos="zoom-y-out"
                >
                  <span className="text-secondary">The Logistics Team</span>
                </h1>
              </div>
              <div className="p-4 rounded-lg bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
                {logistics.map((member, index) => {
                  return (
                    <div key={index} className="">
                      <img
                        className="rounded-circle"
                        width="160px"
                        height="160px"
                        src={member.img}
                        alt="based"
                      />

                      <div className="p-5">
                        <h5
                          className="mb-2 display-4 fw-bold text-white"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.name} ' {member.year} <br /> {member.position}
                        </h5>

                        <p
                          className="mb-3 font-weight-normal text-white-50"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.msg}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pb-12 text-center md:pb-16">
                <h1
                  className="mb-4 display-2 fw-bold text-white md:display-3"
                  data-aos="zoom-y-out"
                >
                  <span className="text-secondary">The Tutors</span>
                </h1>
              </div>
              <div className="p-4 rounded-lg bg-[#3D4469] border border-light shadow-md  grid grid-cols-2">
                {tutors.map((member, index) => {
                  return (
                    <div key={index} className="">
                      <img
                        className="rounded-circle"
                        width="160px"
                        height="160px"
                        src={member.img}
                        alt="based"
                      />

                      <div className="p-5">
                        <h5
                          className="mb-2 display-4 fw-bold text-white"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.name} ' {member.year} <br /> {member.position}
                        </h5>

                        <p
                          className="mb-3 font-weight-normal text-white-50"
                          style={{ color: "#D6D3CD" }}
                        >
                          {member.msg}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
