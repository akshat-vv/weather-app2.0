import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/akshat-vv/weather-app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Akshat Vijayvergiya
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
