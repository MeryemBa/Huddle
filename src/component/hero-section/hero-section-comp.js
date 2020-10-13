import React from "react";
import Header from "../header/header-comp";
import CustomButton from "../costumButton/customButton-comp";
import "./hero-section-styles.scss";

function HeroSection({ title, content, buttonText, imageURL }) {
  return (
    <div className="hero-section-container">
      <Header />
      <div className="sub-section-container">
        <div className="info">
          <h1>{title}</h1>
          <p>{content}</p>
          <CustomButton>{buttonText}</CustomButton>
        </div>
        <img src={imageURL} alt="illustraction-mockups" />
      </div>
    </div>
  );
}

export default HeroSection;
