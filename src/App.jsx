import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Body from "./components/Body";


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled. ", "success");
      document.title = "Refinetograph- Dark Mode";

      // Change the title dynamically    // setInterval(() => {
      //   document.title = "Refinetograph is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Refinetograph";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled. ", "success");
      document.title = "Refinetograph- Light Mode";
    }
  };
  return (
    // <Router>
    <>
      <Navbar title="Refinetograph" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Body />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route */}
        {/* path="/" */}
        {/* element={ */}
      
      </div>
    </>
  );
}

export default App;