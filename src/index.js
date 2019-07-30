import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

import "./assets/favicons/favicons";
import "./assets/scss/custom.scss";
import "./assets/scss/base.scss";
import Main from "./components/Main/Main.jsx";

const rootElement = document.getElementById("root");
rootElement ? ReactDOM.render(<Main />, rootElement) : false;