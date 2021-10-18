import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from './components/Homepage'

import Login from "./components/login"; //login form
import Itemlist from "./components/itemList"; //all the items for sale will be located in

function App() {
  return (
    <div className="App">
      <Login />
      <Itemlist />
      <Homepage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
