import React from "react";
import "../assets/styles/header.scss";

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
          <li>
            <a href="#">MY SPACE</a>
            <ul>
              <li>
                <a href="#">My published jokes</a>
              </li>
              <li>
                <a href="#">My saved jokes</a>
              </li>
              <li>
                <a href="#">Account information</a>
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
