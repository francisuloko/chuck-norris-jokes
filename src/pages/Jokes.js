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
  console.log(jokes);
  const list = state.map((joke) => <Joke key={joke.id} joke={joke} />);
  const [tag, setTag] = useState("all");

  useEffect(() => {
    setState(jokes)
  }, [jokes]);

  return (
    <>
      <Layout
        header={<Header />}
        hero={<Hero />}
        aside={<Category changeCategory={setState} setTag={setTag} />}
        grid={<Grid gridItems={list} columns={3} />}
        footer={<Footer />}
        tag={true}
        border={true}
        category={tag + " Jokes"}
      />
    </>
  );
}
