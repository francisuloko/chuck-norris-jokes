import React from "react";
import PathIcon from '../assets/assets_Homework_Front-End_01/path@3x.png';
import '../assets/styles/common-button.scss';

export default function Button(props) {
  return (
    <div className="common-button">
      <button onClick={props.btn}>{props.text}</button>
      <img src={PathIcon} alt="path icon" />
    </div>
  );
}
