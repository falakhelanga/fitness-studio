import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Hearder from "./components/Hearder";
import Instructors from "./components/Instructors";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Hearder />
        <About />
        <Instructors />
      </main>
    </Router>
  );
};

export default App;
