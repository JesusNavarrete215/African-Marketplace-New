import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "../Homepage.css";

function Homepage(props) {
  return (
    <div>
      <section id="description">{/* Selina's code here*/}</section>
      <section id="about-us">{/* Selina's code here*/}</section>
      <section id="squares">
        <Link to="/list-items">
          <div id="explore">
            <p>Explore Listings</p>
          </div>
        </Link>
        <Link to="/signup">
          <div id="seller">
            <p>Become a Seller</p>
          </div>
        </Link>
        <Link to="/login">
          <div id="business">
            <p>Log In</p>
          </div>
        </Link>
      </section>
      <section id="footer">
        <h2>Contact Us</h2>
        <br />
        <p>Email: hello@africanmarketplace.com</p>
        <p>Phone: 716-555-1234</p>
      </section>
    </div>
  );
}

export default connect(null)(Homepage);
