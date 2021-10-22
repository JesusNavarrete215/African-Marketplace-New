import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { verifyUser } from "../actions";

const Login = (props) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState([]);
  const { credentials, verifyUser } = props;
  const { push } = useHistory();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("api/users/login ", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        verifyUser(value);
        push("/item-list"); // once we successfully get the correct token then we want to push to itemList and have the addItem form available.
      })
      .catch((err) => {
        setError("Username and Password do not match! Please try again");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={value.username}
          onChange={handleChange}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={value.username}
          onChange={handleChange}
        />

        <p>{error}</p>

        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { verifyUser })(Login);
