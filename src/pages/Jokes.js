import React, { useContext, useEffect, useState } from "react";
import { JokesContext } from "../context/JokesContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Category from "../components/Category";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Joke from "../components/Joke";

export default function Jokes() {
  const { jokes } = useContext(JokesContext);
  const [state, setState] = useState(jokes);
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const list = items.map((joke) => <Joke key={joke.id} joke={joke} />);
  const [tag, setTag] = useState("all");
  
  function loadMoreItems() {
    setTag("all")
    setIsFetching(true);
    setItems((prevState) => [
      ...jokes.slice(0, prevState.length + 6)
    ]);
    setIsFetching(false);
  }

  useEffect(() => {
    setState(jokes.slice(0,6));
    setItems(state)
  }, [jokes]);

  return (
    <>
      <Layout
        header={<Header />}
        hero={<Hero />}
        aside={<Category changeCategory={setItems} setTag={setTag} />}
        grid={<Grid gridItems={list} columns={3} loadMore={loadMoreItems} isFetching={isFetching} />}
        footer={<Footer />}
        tag={true}
        border={true}
        category={tag + " Jokes"}
      />
    </>
  );
}
