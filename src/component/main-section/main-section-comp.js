import React from "react";
import Feature from "../feature/features-comp";
import "./main-section-styles.scss";

function MainSection({ features }) {
  return (
    <div className="mainsection-container">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
}

export default MainSection;
