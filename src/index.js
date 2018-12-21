import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");
const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(<App />, root);
