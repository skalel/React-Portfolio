import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutMe from "../pages/AboutMe";
import Development from "../pages/Development";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/development" element={<Development />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
export default Router;
