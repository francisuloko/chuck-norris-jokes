import React from "react";
import "../assets/styles/tag.scss";

export default function Tag(props) {
  const degree = <span className="fill-circle">&#9679;</span>;
  const trend = <div className="trend">{degree} Trending</div>;
  return (
    <div className="tag-section">
      <div className={`tag ${props.color}`}>
        {props.icon ? degree : ""}
        <span>{props.category}</span>
      </div>
      {props.icon ? trend : ""}
    </div>
  );
}
