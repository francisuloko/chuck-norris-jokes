import React, { useContext, useState } from "react";
import "../assets/styles/category.scss";
import { JokesContext, allCategories } from "../context/JokesContext";
import ArrowDown from "../assets/assets_Homework_Front-End_01/path-copy-7@3x.png";
import ArrowUp from "../assets/assets_Homework_Front-End_01/path-copy-7@3x.png";


export default function Category(props) {
  const { jokes } = useContext(JokesContext);
  const [showMore, setShowMore] = useState(false);

  const handleCategory = (category) => {
    const temp = jokes.filter((item) => item.categories[0] === category);
    props.setTag(category);
    props.changeCategory(temp);
  };

  const selectCategory = allCategories.map((category) => (
    <button key={category} onClick={() => handleCategory(category)}>
      {category}
    </button>
  ));

  selectCategory.push(
    <button key={"uncategorized"} onClick={() => handleCategory()}>
      uncategorized
    </button>
  );

  return (
    <div className="categories">
      {showMore ? selectCategory : selectCategory.slice(0, 6)}
      <div>
        {showMore ? (
          <button className="view-all" onClick={() => setShowMore(!showMore)}>
            VIEW LESS
            <img className="arrow-up" src={ArrowDown} alt="Arrow down" />
          </button>
        ) : (
          <button className="view-all" onClick={() => setShowMore(!showMore)}>
            VIEW ALL
            <img src={ArrowUp} alt="Arrow up" />
          </button>
        )}
      </div>
    </div>
  );
}
