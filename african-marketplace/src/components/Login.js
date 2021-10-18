import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

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
      .post("server", value)
      .then((res) => {
        localStorage.setItem("token", res.data.token); //depends on the res from the server
        push(); // once we successfully get the correct token then we want to push to itemList and have the addItem form available.
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

export default Login;
