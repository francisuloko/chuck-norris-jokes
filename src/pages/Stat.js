import React from "react";
import Back from "../components/Back";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Stat() {

  return (
    <>
      <Layout
        header={<Header />}
        hero={<Hero />}
        aside={<Back />}
        grid={<Grid hideButton={true} gridItems={<Details />} columns={2}/>}
        footer={<Footer />}
        category=""
      />
    </>
  );
}
