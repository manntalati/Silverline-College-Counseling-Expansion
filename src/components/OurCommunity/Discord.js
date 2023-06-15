import React from "react";

const Discord = () => {
  const bodyStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#D6D3CD",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#918CA1",
  };
  return (
    <div style={{ backgroundColor: "#1E2022", padding: "7rem" }}>
      <div className="container">
        <h1 style={titleStyle}>Discord</h1>
        <p className="my-0" style={bodyStyle}>
          Silverline has a dedicated Discord server where students can join to connect with our community and access various resources. 
          In our Discord server, you can find 50+ helpers who are ready to assist you with your questions and provide quick help. Whether 
          you need help with a specific reading problem, calculus question, or any other academic inquiry, our community helpers are available to support you.
          <br /><br />
          To join our Discord server, simply visit our website and click on the Discord invite link. 
          Once you join, you can indicate your interest in becoming a helper and be assigned to the helper role. 
          If you have any questions or need assistance, feel free to ask in the appropriate channels, and our community 
          members will be happy to assist you.
          <br /><br />
          Please note that while our Discord server provides quick help for specific questions, for broader and more extensive 
          tutoring needs, we recommend availing our dedicated tutoring service with our experienced tutors. 
          Our tutors are available to provide comprehensive guidance and support for various subjects and academic levels.
        </p>
      </div>
    </div>
  );
};

export default Discord;
