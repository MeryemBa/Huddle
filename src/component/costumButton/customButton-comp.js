import React from "react";
import "./customButton-styles.scss";

function CustomButton({ children, hcta }) {
  return <button className={hcta ? "header-button" : null}>{children}</button>;
}

export default CustomButton;
