import React from "react";
import "../assets/styles/header.scss";
import ProfileIcon from '../assets/assets_Homework_Front-End_01/shape@3x.png'
import PathIcon from '../assets/assets_Homework_Front-End_02/path@3x.png'

export default function Header() {
  return (
    <div className="header-section">
      <nav>
        <ul>
          <li>
            <a href="#">HOW IT WORKS</a>
          </li>
          <li>
            <a href="#">SPECIAL OFFERS</a>
          </li>
          <li className="my-space">
            <img src={ProfileIcon} alt="profile icon" />
            <a href="#">MY SPACE</a>
            <img src={PathIcon} alt="path icon" />
            <ul>
              <li>
                <a href="#">My published jokes</a>
              </li>
              <li>
                <a href="#">My saved jokes</a>
              </li>
              <li>
                <a href="#">Account Information</a>
              </li>
              <li>
                <a href="#">Publish new joke</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
