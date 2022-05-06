import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/back-button.scss";
import leftChevron from "../assets/assets_Homework_Front-End_02/arrow-left@3x.png";

export default function Back() {
  return (
    <div className="back-button">
      <Link to="/">
        <div>
          <img src={leftChevron} alt="back button" />
        </div>
      </Link>
    </div>
  );
}
