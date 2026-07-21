import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from './App.jsx';

ReactDOM.render(
  <BrowserRouter basename="/ipad">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);