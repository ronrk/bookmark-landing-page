import React from "react";
import Button from "../UI/Button";

const FeatureArticle = ({ title, text, img }) => {
  return (
    <div className="feature">
      <div className="bg"></div>
      <img src={img} alt="" />
      <div className="content">
        <h3 className="text-dark fw-m">{title}</h3>
        <p className="text-light">{text}</p>
        <Button className="info-btn filled blue">More Info</Button>
      </div>
    </div>
  );
};

export default FeatureArticle;
