import React from "react";
import "./Info.css";

const Info = ({ title, points }) => {
  return (
    <div className="info-container">
      <h2>{title}</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;