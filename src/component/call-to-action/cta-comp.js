import React from "react";
import CostumButton from "../costumButton/customButton-comp";
import "./cta.scss";

function CTA({ title, buttonText }) {
  return (
    <div className="cta-container">
      <div className="cta">
        <h2>{title}</h2>
        <CostumButton>{buttonText}</CostumButton>
      </div>
    </div>
  );
}

export default CTA;
