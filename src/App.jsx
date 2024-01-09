import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Body from "./components/Body";
import DeblurImage from "./components/DeblurImage";
import Home from "./components/Home";
import NightImage from "./components/NightImage";
import Upscale from "./components/Upscale";
import About from "./components/About";


import "./App.css";

function App() {
  // const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 3000);
  // };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "grey";
  //     showAlert("Dark Mode has been enabled. ", "success");
  //     document.title = "Refinetograph- Dark Mode";

      // Change the title dynamically    
      // setInterval(() => {
      //   document.title = "Refinetograph is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Refinetograph";
      // }, 1500);
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light Mode has been enabled. ", "success");
    //   document.title = "Refinetograph- Light Mode";
    // }
  // };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Body />} />
          <Route path="/upscale" element={<Upscale />} />
          <Route path="/deblur-image" element={<DeblurImage />} />
          <Route path="/night-image" element={<NightImage />} />
          <Route path="/about" element ={<About/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;