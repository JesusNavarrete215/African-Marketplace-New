import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { verifyUser } from "../actions";

const initialState = {
  credentials: { username: "", password: "" },
};

const SignUp = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const { push } = useHistory();
  const { verifyUser } = props;

  const handleChange = (e) => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://african-marketplace-db.herokuapp.com/api/users/register",
        credentials
      )
      .then((res) => {
        // verifyUser(credentials.credentials);
        console.log(res);
        // localStorage.setItem("token", res.data.token);
        // push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <ComponentContainer>
    //     <ModalContainer>
    <div>
      <h1>Welcome</h1>
      <h2>Sign Up Here</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button id="submit">Sign Up</button>
        </form>
      </div>
    </div>
    // </ModalContainer>
    // </ComponentContainer>
  );
};

export default connect(null, { verifyUser })(SignUp);
