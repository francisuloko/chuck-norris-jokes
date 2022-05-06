import React, { useEffect, useState, useContext, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JokesContext } from "../context/JokesContext";
import SearchIcon from "../assets/assets_Homework_Front-End_02/search-copy@3x.png";
import "../assets/styles/filter.scss";

export default function Filter() {
  const { jokes } = useContext(JokesContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplayUl] = useState("hide");
  const handleChange = (event) => {
    const value = event.target.value;
    value === "" ? setDisplayUl("hide") : setDisplayUl("show");

    setSearchTerm(value);
  };
  useEffect(() => {
    const results = jokes.filter((joke) => joke.value.includes(searchTerm));
    results.length === 1
      ? navigate("/jokes/" + searchResults[0].id, {
          state: { joke: searchResults[0] },
        })
      : null;
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <div className="search-field">
        <input
          type="text"
          placeholder="How can we make you laugh today?"
          value={searchTerm}
          onChange={handleChange}
        />
        <img src={SearchIcon} alt="Search icon" />
        <ul className={display}>
          {searchResults.map((item) => (
            <li key={item.id}>
              <Link
                to={"/jokes/" + item.id}
                state={{ joke: item }}
                onClick={() => setDisplayUl("hide")}
              >
                <span>
                  {item.categories[0]
                    ? item.categories[0] + ": "
                    : "Uncatorized: "}
                </span>
                <span>{item.value.split(" ").slice(0, 5).join(" ")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
