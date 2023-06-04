import React from 'react';
import { Link } from 'react-router-dom';

export default function SilverlineSpecialties() {
  const containerStyle = {
    color: '#D6D3CD',
    position: 'relative',
    fontFamily: 'DM Sans, sans-serif',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  const bodyStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="pt-3" style={titleStyle}>
      Silverline Specialities
      </h1>
      <br></br>
      <p style={bodyStyle}>
      Several organizations provide similar services, so why us? Silverline Tutoring is an exceptional option because of our diversity of topics as well as highly-rated tutors. Perhaps most importantly, our free tutoring comes with no tradeoff in quality. We serve as an all-in-one stop for educational needs. Our use of online platforms provides flexibility that cannot be matched, especially at the quality of service we provide.
      </p>
      <br></br>
      <br></br>
    </div>
  );
}
