import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Body from "./components/main_pages/Body";
import DeblurImage from "./components/functions/DeblurImage";
import Home from "./components/main_pages/Home";
import NightImage from "./components/functions/NightImage";
import Upscale from "./components/functions/Upscale";
import About from "./components/main_pages/About";
import TeamMembers from "./components/main_pages/TeamMembers";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
          <Route index element={<Body />} />
          <Route path="/upscale" element={<Upscale />} />
          <Route path="/deblur-image" element={<DeblurImage />} />
          <Route path="/night-image" element={<NightImage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team-members" element={<TeamMembers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
