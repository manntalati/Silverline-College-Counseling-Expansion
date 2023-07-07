import React, { useState, useEffect } from 'react';
import img from "./extraCommunity.jpg";

export default function Statistics() {
  const statsListConst = [
    { num: 75, text: "Average Sessions Per Week" },
    { num: 78, text: "Average Tutoring Hours Per Week" },
    { num: 108, text: "Current Enrolled Students" },
    { num: 6587, text: "Tutoring Sessions All Time" },
    { num: 247, text: "Volunteers Over Time" },
    { num: 24, text: "Undergraduate Students" },
    { num: 5000, text: "Total Members" },
    { num: 55, text: "Community Assistants" }
  ];

  const [statsList, setStatsList] = useState(statsListConst.map(stat => ({ ...stat, num: 0 })));

  useEffect(() => {
    let timeoutId;

    const startCounting = () => {
      setStatsList(stats => {
        const updatedStats = stats.map((stat, index) => {
          if (stat.num < statsListConst[index].num) {
            const increment = Math.ceil((statsListConst[index].num - stat.num) / 50); // Increase the increment value for faster counting
            return { ...stat, num: Math.min(stat.num + increment, statsListConst[index].num) };
          } else {
            return stat;
          }
        });
        return updatedStats;
      });

      timeoutId = setTimeout(startCounting, 50); 
    };

    timeoutId = setTimeout(startCounting, 1000); 

    return () => clearTimeout(timeoutId); 
  }, []);

  const handleMouseOver = () => {
    
  };

  return (
    <div style={{ width: "100%", background: `url(${img}) no-repeat scroll center/cover`, padding: "150px 50px", display: "flex", flexDirection: "column", alignItems: "center", gap: 50 }} onMouseOver={handleMouseOver}>
      <h1 style={{ color: "white", fontWeight: 800, textAlign: "center", fontFamily: "'Work Sans', sans-serif" }} data-aos="fade-up">Silverline Statistics</h1>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", width: "60%", rowGap: 100, columnGap: 50 }}>
        {statsList.map(s => <StatItem key={s.text} {...s} />)}
      </div>
    </div>
  );
}

const StatItem = ({ num, text }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
    <div style={{ borderRadius: "50%", border: "5px solid white", aspectRatio: "1/1", width: "180px", height: "180px", background: "rgba(145,140,161, 1)", display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", fontSize: "60px", textAlign: "center" }}>{num}</div>
    <h2 style={{ color: "white", textAlign: "center" }}>{text}</h2>
  </div>
);
