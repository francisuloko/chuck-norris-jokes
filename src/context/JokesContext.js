import React, { createContext, useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import axios from "axios";

export const JokesContext = createContext();
export let allCategories = [];

const JokesContextProvider = (props) => {
  const [jokes, setJokes] = useState([]);
  const [categories, setCategories] = useState([]);
  allCategories = categories;

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=all`
      );
      const categories = await axios.get(
        `https://api.chucknorris.io/jokes/categories`
      );
      const temp = data.result.map((joke) => {
        if (!joke.categories[0]) {
          joke.categories.push("uncategorized");
        }
        return { ...joke, likes: 0, unlikes: 0 };
      });
      setJokes(temp);
      setCategories([...categories.data, "uncategorized"]);
    }
    fetchData();
  }, []);

  return (
    <JokesContext.Provider value={{ jokes, setJokes }}>
      {props.children}
    </JokesContext.Provider>
  );
};

export default JokesContextProvider;
