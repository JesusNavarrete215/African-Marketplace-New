import "./App.css";
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Login from "./components/Login"; //login form
import Itemlist from "./components/Itemlist"; //all the items for sale will be located in

import PrivateRoute from "./components/privateRoute";
import AddItem from "./components/AddItem";
import SignUp from "./components/SignUp";
import AfricaLogo from './components/AfricaLogo.png';
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <div className='market-header'>
        <img src={AfricaLogo} alt='green Africa logo' />
        <nav>
          <h1 className='TitleTop'>African Marketplace</h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/login">login</Link>
            <Link to="/add-item">Create Listings</Link>
            <Link to="/signup">Sign Up</Link>

          </div>
        </nav>
      </div>
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
        {/* <PrivateRoute exact path="/item-list" component={Itemlist} /> */}
        </Switch>
    </div>
  );
}

export default connect(null)(App);


