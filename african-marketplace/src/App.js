import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login"; //login form
import Itemlist from "./components/Itemlist"; //all the items for sale will be located in

import PrivateRoute from "./components/privateRoute";
import AddItem from "./components/AddItem";
import SignUp from "./components/SignUp";
import { connect } from "react-redux";

function App() {
  return (
    <div>
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
      {/* <PrivateRoute exact path="/item-list" component={Itemlist} /> */}
    </div>
  );
}

export default connect(null)(App);
