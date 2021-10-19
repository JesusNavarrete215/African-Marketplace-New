import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";

import Login from "./components/Login"; //login form
import Itemlist from "./components/Itemlist"; //all the items for sale will be located in
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/index";
import { Provider } from "redux";

const store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <Itemlist />
      <Homepage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
