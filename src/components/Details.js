import React from "react";
import { useParams } from "react-router-dom";
import Tag from "./Tag";
import "../assets/styles/details.scss";
import LikeIcon from "../assets/assets_Homework_Front-End_02/hand@3x.png";
import UnlikeIcon from "../assets/assets_Homework_Front-End_02/hand-copy@3x.png";
import Next from "../assets/assets_Homework_Front-End_02/arrow-left-copy@3x.png";
import Prev from "../assets/assets_Homework_Front-End_02/arrow-left@3x.png";

export default function Details() {
  const { id } = useParams();

  return (
    <>
      <div className="leftPane">
        <div className="leftCard">
          <Tag color="green" category="Category" icon={true} />
          <h2>Chuck Norris Joke</h2>
          <p>
            An old grandma brings a bus driver a bag of peanut everyday. First
            the bus driver enjoyed the peanuts but after a week of eating themm
            he asked: "Please granny, don't bring me peanuts anymore. Have them
            yourself." The granny answers: "You know, I don't have teeth
            anymore. I just prefer to suck the chocolate around them."
          </p>
        </div>
        <div className="engagement-buttons">
          <div className="likes">
            <div className="like">
              <img src={LikeIcon} alt="Like icon" />
              <span className="counter">0</span>
            </div>
            <div className="unlike">
              <img src={UnlikeIcon} alt="Unlike icon" />
              <span className="counter">0</span>
            </div>
          </div>
          <div className="controls">
            <button className="prev">
              <img src={Prev} alt="left chevron icon" />
              PREV.JOKE
            </button>
            <button className="next">
              NEXT.JOKE
              <img src={Next} alt="left chevron icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="rightPane">
        <div className="rightCard">
          <h4>THE TOP JOKES THIS WEEK</h4>
          <ul>
            <li>
              <a href="#">Joke 1</a>
            </li>
            <li>
              <a href="#">Joke 2</a>
            </li>
            <li>
              <a href="#">Joke 3</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
