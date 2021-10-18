import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch } from 'react-router-dom';

//components for nav
import Homepage from './components/Homepage';
import CreateAccount from './components/CreateAccount';
import Itemlist from "./components/Itemlist";
import AddItem from "./components/AddItem"
import Login from "./components/Login"; //login form
import Itemlist from "./components/Itemlist"; //all the items for sale will be located in
import AfricaLogo from './components/AfricaLogo.png';


function App() {



  return (
    <div className="App">
      <div className='market-header'>
        <img src={AfricaLogo} alt='green Africa logo' />
        <nav>
          <h1 className='TitleTop'>African Marketplace</h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/create-an-account">Create An Account</Link>
            <Link to="/marketplace">MarketPlace</Link>
            <Link to="/create-listing">Create Listings</Link>
            <Link to="/login">login</Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/create-listing">
          <AddItem />
        </Route>

        <Route path="/marketplace">
          <Itemlist />
        </Route>

        <Route path="/create-an-account">
          <CreateAccount />
        </Route>

        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
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
