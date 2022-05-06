import React from "react";
import "../assets/styles/grid.scss";
import ArrowDown from "../assets/assets_Homework_Front-End_01/path-copy-7@3x.png";

export default function Grid(props) {
  return (
    <>
      <div className={"grid-" + props.columns}>{props.gridItems}</div>
      <div className="load-more">
        {!props.isFetching &&
          (!props.hideButton ? (
            <button className="load-more-btn" onClick={props.loadMore}>
              View more
              <img src={ArrowDown} alt="Arrow down" />
            </button>
          ) : (
            ""
          ))}
      </div>
    </>
  );
}
