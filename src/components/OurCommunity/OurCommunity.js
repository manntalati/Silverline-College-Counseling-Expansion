import React from "react";
import Footer from "../Footer";
import OurReach from "./OurReach";
import Opportunities from "./Opportunities";
import QuickHelp from "./QuickHelp";
import Discord from "./Discord";
import AboutOurCommunity from "./AboutOurCommunity";

const OurCommunity = () => {
  return (
    <>
      <AboutOurCommunity/>
      <OurReach />
      <Opportunities />
      <Discord />
      <QuickHelp />
      <Footer />
    </>
  );
};

export default OurCommunity;
