import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JokesContextProvider from "./context/JokesContext";
import Jokes from "./pages/Jokes";
import Stat from "./pages/Stat";

export default function App() {
  return (
    <>
      <JokesContextProvider>
        <Router>
          <Routes>
            <Route exact path="/jokes/:id" element={<Stat />} />
            <Route exact path="/" element={<Jokes />} />
          </Routes>
        </Router>
      </JokesContextProvider>
    </>
  );
}
