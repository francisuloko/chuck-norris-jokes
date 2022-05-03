import React from "react";
import "../assets/styles/joke.scss";
import ThunderboltIcon from "../assets/assets_Homework_Front-End_01/green-light-copy-2@3x.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Joke(props) {
  return (
    <div className="joke">
      <div className="text">
        <div className="title">
          <img src={ThunderboltIcon} alt="thunderbolt icon" />
          <h2>{props.joke.title}</h2>
        </div>
        <p>{props.joke.text}</p>
      </div>
      <div className="joke-details">
        <Link to={`/jokes/${props.joke.id}`} text="See Stat">
          <Button text="See Stat" />
        </Link>
      </div>
    </div>
  );
}
