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
      setJokes(data.result);
      setCategories(categories.data)
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
