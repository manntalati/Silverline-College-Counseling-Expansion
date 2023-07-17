import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4"
            style={{ backgroundColor: "#3d446a",
                     fontFamily: "Serif"}}>
      <div className="site-footer" 
           style={{ backgroundColor: "#3d446a"}}>
        <div style={{ backgroundColor: "#3d446a", 
                      display: "grid",                 
                      gridTemplateColumns: "repeat(3, 1fr)", 
                      gridGap: 20 }}>
          <h3 style={{ color: "#fffefb"}}> Silverline Tutoring </h3>
          <h3 style={{ color: "#fffefb"}}> Navigation </h3>
          <h3 style={{ color: "#fffefb"}}> Contact </h3>
        </div>
        <div style={{ backgroundColor: "#3d446a", 
                      display: "grid", 
                      gridTemplateColumns: "repeat(3, 1fr)", 
                      gridGap: 20 }}>
          <p style={{ color: "grey"}}> 
            We made Silverline consulting exclusively designed for high schoolers, by high schoolers and college students. We understand the unique challenges and aspirations of students like you, and that's why we're here to guide you through the exciting journey of college admissions. Our team, comprised of experienced college students and recent graduates, brings firsthand knowledge and expertise to help you navigate the application process, craft compelling essays, choose the right colleges, and maximize your chances of getting accepted. 
          </p>
          <ul>
            <li style= {{listStyle:'none'}}>
              <a className="Contact" 
                 href="/#" 
                 style={{ color: "grey"}}> Home </a>
            </li>
            <li style ={{listStyle:'none'}}>
              <a className="Contact" 
                 href="/about" 
                 style={{ color: "grey"}}> About Us </a>
            </li>
            <li style ={{listStyle:'none'}}>
              <a className="Contact" 
                 href="/services" 
                 style={{ color: "grey"}}> Services </a>
            </li>
            <li style ={{listStyle:'none'}}>
              <a className="Contact" 
                 href="/community" 
                 style={{ color: "grey"}}> Our Community </a>
            </li>
            <li style ={{listStyle:'none'}}>
              <a className="Contact" 
                 href="/getinvolved" 
                 style={{ color: "grey"}}> Get Invovled </a>
            </li>
            <li style ={{listStyle:'none'}}>
              <a className="Contact" 
                 href="/reviews" 
                 style={{ color: "grey"}}> Reviews </a>
            </li>
          </ul>
          <ul style={{ color: "grey"}}>
            <li style ={{listStyle:'none'}}>
              <a className="Contact"> Massachusetts, United States </a>
            </li>
            <li href="tel:+7862959992" 
                style ={{listStyle:'none'}}>
              <a className="Contact"> (786)-295-9992 </a>
            </li>
            <li style ={{listStyle:'none'}}>
              <a href="mailto:silverlinetutoring@gmail.com"
                 className="Contact" 
                 style={{color:"grey"}}> silverlinetutoring2021@gmail.com </a>
            </li>
          </ul>
          <div className="row" 
               style={{ backgroundColor: "#3d446a"}}>
            <div className="col" 
                 style={{ backgroundColor: "#3d446a"}}>
              <p className="text-center" 
                 style={{ color:"grey"}}> &copy; {new Date().getFullYear()} Silverline Tutoring Services | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
