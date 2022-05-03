import React from "react";
import "../assets/styles/back-button.scss";
import leftChevron from "../assets/assets_Homework_Front-End_02/arrow-left@3x.png";

export default function Category() {
  return (
    <div className="back-button">
      <div>
        <img src={leftChevron} alt="back button" />
      </div>
    </div>
  );
}
