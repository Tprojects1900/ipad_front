import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter basename="/ipad">
    <div style={{fontSize: "40px", color: "red"}}>
      TEST IPAD OK
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);