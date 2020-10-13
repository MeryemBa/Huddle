import React from "react";
import "./feature.scss";
function Feature({ title, content, imageURL, imageALT }) {
  return (
    <div className={`feature-container`}>
      <img src={imageURL} alt={imageALT} />
      <div className="feature-info">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Feature;
