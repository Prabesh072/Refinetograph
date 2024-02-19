import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Body from "./components/main_pages/Body";
import DenoiseImage from "./components/functions/DenoiseImage";
import Home from "./components/main_pages/Home";
import LowlightImage from "./components/functions/LowlightImage";
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
          <Route path="/denoise-image" element={<DenoiseImage />} />
          <Route path="/lowlight-image" element={<LowlightImage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team-members" element={<TeamMembers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
