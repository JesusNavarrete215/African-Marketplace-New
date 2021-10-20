import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { render } from "react-dom";
import axios from "axios";
import axiosWithAuth from "./../utils/axiosWithAuth";
import { connect } from "react-redux";

class SignUp extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  signUp = (event) => {
    event.preventDefault();
    this.state.props
      .axiosWithAuth()
      .post("", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // this.props.history.push('/view');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      // <ComponentContainer>
      //     <ModalContainer>
      <div>
        <h1>Welcome</h1>
        <h2>Sign Up Here</h2>
        <div>
          <form onSubmit={this.signUp}>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button onClick={this.signUp} id="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      // </ModalContainer>
      // </ComponentContainer>
    );
  }
}

export default connect(null, axiosWithAuth)(SignUp);
