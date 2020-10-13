import React from "react";
import logo from "../../assets/logo.svg";
import CustomButton from "../costumButton/customButton-comp";
import "./header-styles.scss";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="buttonContainer">
        <CustomButton hcta={true}>Try It Free</CustomButton>
      </div>
    </div>
  );
}

export default Header;
