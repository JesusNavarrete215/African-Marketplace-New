import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/index";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
