import React, { useContext } from "react";
import "../assets/styles/category.scss";
import { JokesContext, allCategories } from "../context/JokesContext";

export default function Category(props) {
  const { jokes } = useContext(JokesContext);

  const handleCategory = (category) => {
    const temp = jokes.filter((item) => item.categories[0] === category);
    props.setTag(category);
    props.changeCategory(temp);
  };


  const selectCategory = allCategories.map((category) => (
    <button key={category} onClick={() => handleCategory(category)}>{category}</button>
  ));

  return (
    <div className="categories">
      {selectCategory}
      <button className="view-all">VIEW ALL</button>
    </div>
  );
}
