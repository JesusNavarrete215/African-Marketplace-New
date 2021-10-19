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
import PrivateRoute from "./components/privateRoute";
import AddItem from "./components/AddItem";
import SignUp from "./components/SignUp";

const store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
  const loggedIn = localStorage.getItem("token");

  return (
    <StyledApp>
      <NavBar logged={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/add-item">
          <AddItem />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/item-list" component={Itemlist} />
      </Switch>
    </StyledApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
