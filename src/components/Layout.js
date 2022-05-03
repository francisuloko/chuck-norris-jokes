import React from "react";
import Tag from "./Tag";
import "../assets/styles/layout.scss";

export default function Layout(props) {
  return (
    <div className="layout">
      <header>{props.header}</header>
      <main>
        <section className="hero-section">{props.hero}</section>
        <section className="">
          <div className="category-section">{props.aside}</div>
          <div className={props.border ? "jokes-section top-border" : "jokes-section"}>
            {props.tag ? <Tag color="green" category={props.category}/> : ""}
            <div className="">{props.grid}</div>
          </div>
        </section>
      </main>
      <footer>{props.footer}</footer>
    </div>
  );
}
