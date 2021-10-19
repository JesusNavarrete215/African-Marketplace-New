import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./components/login"; //login form
import Itemlist from "./components/itemList"; //all the items for sale will be located in

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <Itemlist />
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
