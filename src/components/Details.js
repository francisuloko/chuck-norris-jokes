import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { JokesContext } from "../context/JokesContext";
import Tag from "./Tag";
import "../assets/styles/details.scss";
import LikeIcon from "../assets/assets_Homework_Front-End_02/hand@3x.png";
import UnlikeIcon from "../assets/assets_Homework_Front-End_02/hand-copy@3x.png";
import Next from "../assets/assets_Homework_Front-End_02/arrow-left-copy@3x.png";
import Prev from "../assets/assets_Homework_Front-End_02/arrow-left@3x.png";

export default function Details() {
  const { state } = useLocation();
  const { jokes } = useContext(JokesContext);
  const [likeButton, setLikeButton] = useState({
    like: false,
    dislike: false,
  });
  const index = jokes.findIndex((object) => {
    return object.id === state.joke.id;
  });
  const [current, setCurrent] = useState(index);
  const [joke, setJoke] = useState(jokes[current]);

  const like = () => {
    setJoke({
      ...joke,
      likes: joke.likes + 1,
    });
  };
  const dislike = () => {
    setJoke({
      ...joke,
      unlikes: joke.unlikes + 1,
    });
  };
  const next = () => {
    current !== jokes.length - 1 ? setCurrent(current + 1) : setCurrent(0);
  };
  const prev = () => {
    current !== 0 ? setCurrent(current - 1) : setCurrent(jokes.length - 1);
  };

  useEffect(() => {
    setJoke(jokes[current]);
  }, [current]);
  useEffect(() => {
    const i = jokes.indexOf(jokes[current]);
    jokes[i] = joke;
  }, [joke]);

  return (
    <>
      <div className="leftPane">
        <div className="leftCard">
          <Tag
            color="green"
            category={joke.categories[0] ? joke.categories[0] : "Uncategorized"}
            icon={true}
          />
          <h2>Chuck Norris Joke</h2>
          <p>{joke.value}</p>
        </div>
        <div className="engagement-buttons">
          <div className="likes">
            <button
              disabled={likeButton.like}
              className="like"
              onClick={() => like()}
            >
              <img src={LikeIcon} alt="Like icon" />
              <span className="counter">{joke.likes}</span>
            </button>
            <button
              disabled={likeButton.dislike}
              className="dislike"
              onClick={() => dislike()}
            >
              <img src={UnlikeIcon} alt="Dislike icon" />
              <span className="counter">{joke.unlikes}</span>
            </button>
          </div>
          <div className="controls">
            <button className="prev" onClick={() => prev()}>
              <img src={Prev} alt="left chevron icon" />
              PREV.JOKE
            </button>
            <button className="next" onClick={() => next()}>
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
              <a href="#">{jokes[0].value.split(" ").slice(0, 5).join(" ")}</a>
            </li>
            <li>
              <a href="#">{jokes[1].value.split(" ").slice(0, 5).join(" ")}</a>
            </li>
            <li>
              <a href="#">{jokes[2].value.split(" ").slice(0, 5).join(" ")}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
