import React from "react";

function Team() {
  /*dummy data, paths for images must be made, not sure what images to choose and fill in respective positions*/
  const board = [
    {
      name: "Rishi Ajmera",
      img: "link_to_image",
      position: "",
      msg: "Rishi Ajmera is currently a high school senior from Eastern Massachusetts. Rishi’s initiative and concern about the barriers and inequality within education led him to found and run the organization. Rishi’s passion stemmed from his keen interests in math and his private tutoring sessions that he did within his local community. He taught students as young as pre- k all the way till 8th grade, ranging from basic addition and abstraction to SAT math problems. Seeing students excited to learn and excelling in their subject as a result, left Rishi satisfied and wanting to continue teaching. However, he realized how many students don’t get the opportunity of private tutoring often due to a multitude of factors like cost. This led to him to create Silverline Tutoring, a non profit organization that offers free tutoring to everyone regardless of background. As for the experience on the business side of the organization, Rishi has lots of experience within this field. He competes in DECA, an international business competition, and this year he competed in the event, entrepreneurship, qualifying all the way to the international stage. The previous year, Rishi competed in the event, principles of marketing, and qualified for states. Rishi is the president of his school's finance club as well which focuses on many aspects of personal finance such as stocks. Rishi's experience within business has allowed him to excel in the business side of operations of the organization",
    },
    {
      name: "Ohik Kwon",
      img: "link_to_image",
      position: "",
      msg: " Ohik is currently a rising high school senior in Northern Illinois. Originally born in Seoul, South Korea, his immigration to the United States introduced huge language barriers that hindered his academic progress. Through this experience, Ohik recognizes the negative impacts academic struggles create and serves to ensure no student is left behind to struggle academically. As a board of director, Ohik’s ultimate goal is to expand Silverline and make premium 1 on 1 tutoring sessions free and accessible within mere clicks of a button. As part of his duty and passion, Ohik works closely with all members of the Executive team and Silverline community to guarantee future prosperity and a warm community. Outside of Silverline, he is involved heavily in STEM, participating in his school's year-long Computing Team while launching rockets hundreds of meters into the sky as part of his Rocket Club. He also passionately plays volleyball and tries his best to consistently go to the gym. Ohik is excited about the future of Silverline and fights against academic injustice. He hopes that through Silverline, he can make education available to everyone",
    },
    {
      name: "Nolan Du",
      img: "link_to_image",
      position: "",
      msg: "Nolan is currently a senior at Farragut High School in Tennessee. He enjoys tutoring and helping others. Some things he does is running a COVID-19 vaccine registration organization and a tutoring club at his high school. He is adventurous and creative and has always had a passion for entrepreneurship. He has been involved in the startup space throughout high school and plans to study business in college and continue working on his startup. In particular, he is interested in tech, social platforms, and virtual work. He is always growing his network and invites anyone interested in the startup space to reach out with him so they can connect. Nolan plans to integrate Silverline Tutoring into schools by creating club chapters under our umbrella. Nolan sees this as an opportunity for Silverline to reach more students and make group studying more accessible as an integrated part of the student experience.",
    },
    {
      name: "Shivam Shah",
      img: "link_to_image",
      position: "",
      msg: "Shivam is currently a rising senior in Northern Illinois. He spends his weekday mornings working with ESY children seeking extra support over summer at a local elementary school and frequently travels during the school year for Track & Field, Soccer, and ModelUN. His active participation and energetic attitude in both his school and neighboring communities has suited him as the Human Resources head for Silverline Tutoring. As a student who’s received tutoring himself, Shivam’s found that tutoring agencies often overprice their services and neglect to offer free resources that educated communities flourish and rely upon for academic success. As the Chief Human Resources Officer, Shivam communicates extensively with students and tutors to allow services to occur instantly, and serves to provide opportunities for students to take advantage of. During the school year, he leads his SkillsUSA club and competes at the world level for VEX Robotics. Through his collaboration with faculty and his team to prepare for competitions, he’s able to instantly connect with individuals across the globe, with everlasting discussions in politics, school, and life in general, always available to provide advice. Going forward, Shivam hopes that Silverline Tutoring’s services will be more accessible for students without the necessary technological means and is excited to see the up and coming developments",
    },
    {
      name: "Avaneesh Mallela",
      img: "link_to_image",
      position: "",
      msg: "Avaneesh Mallela is a high school student attending Westford Academy. Being an avid reader, he loves to learn. Ever since a young age, the internet and business have always intrigued him. He always looks at ways that these 2 things can be improved in any organization he works with as well as their application being combined. It is something that he loves and aspires to do evidenced by his projects all the way back in elementary school using google maps to find the most effective path to sell candy and what to say by looking at the street on which he is on to sell the candy. This is just one of many things he has done but he is not satisfied! Using technology and his experience in business he looks to find interesting ways to further any organization he is apart of. His experience in technology is evidenced by his extensive understanding of business solutions evidenced by him winning hackathons as well as attending the coveted-DECA SCDC competition. Something Avaneesh values highly is education which is the main factor on which he joined Silverline tutoring. His aim in joining Silverline tutoring is to further expand the reach and quality of the services offered by leveraging his skill",
    },
    {
      name: "Martin Coleman",
      img: "link_to_image",
      position: "",
      msg: "Marty Coleman is currently a high school senior from Chelmsford, Massachusetts. At Chelmsford High School, he serves as Class President and is the Founder and President of the Physics and Engineering Club. Marty sees effective education as vital to personal improvement and societal progress and seeks to advance the accessibility of quality learning and extra help through his participation in Silverline. He seeks to apply his interpersonal, networking, and business strategy skills to his position as a Board Member to expand Silverline's outreach. Marty plans on majoring in Physics in college and is deeply interested in the universe, astrophysics, technology, and economic philosophy. At Chelmsford High, Marty has also participated in the Freshman Mentor Program, DECA, Class Representatives, Student Council, Investing Club, and more, all of which have honed his skills as a leader and student. He has also taken summer courses such as Introduction to Astrophysics at Harvard University's summer program. Marty has taken several online courses on stock trading and gained experience in the stock market over the last 3 years. He is also an enthusiastic participant in the town basketball league. He's excited to partake in and watch Silverline grow as an organizatio",
    },
    {
      name: "Hassan Palanpurwala",
      img: "link_to_image",
      position: "",
      msg: "Hassan Palanpurwala is currently a rising senior in South Florida. Hassans urbane attitude, passion for helping others, and organization allowed him to fit in at Silverline Tutoring. Hassan’s passion for helping others came at a young age when he struggled with speaking English at school. Hassans first language was Gujarati, and when he started school he didn't know how to communicate with others. However, with the help of his parents and others around him, he was left feeling fulfilled and confident in school and wanted to help others feel this way. Hassan became very active in his community by starting book drives, helping tutor kids, and working with local schools to bring speech and debate to schools with less resources. These goals and passions led him to Silverline Tutoring. After applying for a tutoring position at Silverline, Hassan was given the opportunity to become the Chief Marketing Officer, and eventually the Chief Innovation Officer, before sitting on the board of directors for Silverline Tutoring. His experience in DECA, a business club at his school, helped him gain this position at Silverline. Aside from placing first at DECA states and qualifying for internationals, Hassans passion for debate and public speaking, qualifying for nationals, and placing at multiple national tournaments also helped him climb the ranks at Silverline to become a Board of Director. Hassans position at his local mosque where he helps plan and organize events, as well as manage finances, also helps him perform his job effectively and efficiently at Silverline",
    },
  ];

  const executives = [
    {
      name: "Ramon Perez",
      img: "link_to_image",
      position: "",
      msg: " Ramon Perez is currently a high school sophomore in South Florida. Being an immigrant from the Dominican Republic, he had to use educational resources to help him integrate himself into his new situation. Outside of school, he loves to participate in Public Forum debate, where he is the captain of the event at his school and the highest-ranked sophomore in his state. Alongside the competitive aspect of the debate, he created a website, PublicForumNow.com, to create high-quality debate resources free of charge for any student. He plans to study Political Science and Economics because he believes he can use the knowledge he learns in these fields to improve the world around him. Ramon’s personal experience with resources like Silverline and inequality in academia has given him the drive to give that access to students who were in his position. Going forward he plans to expand the organization and give many more kids an opportunity to improve their grades at school and create a passion for learning.",
    },
    {
      name: "Eric Cheng",
      img: "link_to_image",
      position: "",
      msg: "Eric is currently a junior at Green Hope High School in North Carolina. His interest in technology and business management has allowed him to fit into Silverline as the head of operations. As a part of his duties at Silverline, he works closely with other members of the executive team and the community as a whole. Eric’s goal is to expand Silverline to reach more students. Outside of Silverline, Eric is heavily involved in computer science; he serves as a voting board member with multiple open-source projects and is a senior developer at an up-and-coming startup based in Silicon Valley. Furthermore, Eric is the Vice President of Technology of a business education nonprofit called “Pitch Labs”, where he recently helped win a $120,000/year grant from Google. Eric’s experience with managing large teams has helped him excel and thrive as the operations head of Silverline",
    },
    {
      name: "Aquib Syed",
      img: "link_to_image",
      position: "",
      msg: "Aquib is currently a high school junior attending Mills E. Godwin High School in Richmond, Virginia. His interest in tutoring and his passion for computer science and technology have allowed him to fit in at Silverline as a CTO. Aquib’s passion for tutoring began when he taught students at Kumon. During the COVID-19 Pandemic, Aquib joined a non-profit as a Director of Logistics, where he expanded tutoring programs for students. Aquib took his interest in tutoring programs to the next level by stepping up to the RePicture Advisory Board, where he works with RePicture executives, college undergraduates, and graduates to expand STEM Mentorship programs around the world. On the technology side, Aquib has always loved web development, and coded a website for a telemedicine company that won a state competition. Additionally, he has interned at several companies and startups, including a college admissions startup and a fintech. He also currently serves as the head and recruiter of a developer team at a stealth startup, where he is leading developers to create a machine learning solution. Outside of school, Aquib enjoys playing cricket and badminton, and actually founded a badminton club at his school. With a strong enthusiasm for tutoring and computer science, Aquib thrives as a CTO at Silverline",
    },
    {
      name: "Lauren Churchill",
      img: "link_to_image",
      position: "",
      msg: "Lauren Churchill is a high school sophomore from West Florida. Outside of school, she participates in a variety of extracurriculars, such as Robotics, FBLA, and the Science National Honors Society where she competes. Additionally, she has also founded the U.S Politics club, as well as the film club, at her school which has allowed her to gain leadership experience in addition to the other board positions she holds. Since a young age, she has also played tennis frequently - playing on her school's varsity team as well as through private training and tournaments. Her expertise in both marketing strategies and data analysis has carried over into her position as Chief Marketing Officer at Silverline Tutoring - an organization that aligns with her passion for helping others, specifically those who are underprivileged in education. In the future, she plans to study English literature and biological science, as well as improve on her marketing abilities through the position she holds at Silverline",
    },
    {
      name: "Aayan Rahat",
      img: "link_to_image",
      position: "",
      msg: "Aayan is a high school student in North Texas who is passionate about medicine, computer science, and its intersection. In school he is a member of his high school's Student Council, NHS, and a bassist in orchestra. Outside of school, you can find him coaching his middle school math and science team, working on image segmentation algorithms, or refereeing soccer. He hopes to be able to make whatever impact he can and help connect tutors and students at Silverline! When he isn't busy, you can often find him watching a Dallas Mavericks Game or watching the FC Dallas play in the MLS. Fun fact, he is also Canadian",
    },
    {
      name: "Evan Fernando",
      img: "link_to_image",
      position: "",
      msg: "Evan Fernando is a sophomore in Central Florida. He is interested in law and politics, however, he is deeply passionate about helping others He has a plentiful of experiences in regard to activism, as he has fed thousands in Sri Lanka, during a devastating economic crisis. Evan hopes to dramatically expand Silverline Tutoring to not just an educational platform, but also partly a humanitarian platform, bringing educational resources to areas all across the world in which there are not. Outside of Silverline Tutoring, he raises awareness of humanitarian issues, which he has accumulated over a million views across social media platforms. Aside from activism, Evan is a flutist and has been a flutist since he was in 4th grade. In addition to this, Evan plays chess, and he is the captain of a 30-person chess team in which they have won international competitions",
    },
  ];
  
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
                          {member.name} {member.position}
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
                          {member.name} {member.position}
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
                          {member.name} {member.position}
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
                          {member.name} {member.position}
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
