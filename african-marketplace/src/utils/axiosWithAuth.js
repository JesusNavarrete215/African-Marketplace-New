import axios from "axios";
import { connect } from "react-redux";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://african-marketplace-db.herokuapp.com/api",
    headers: {
      authorization: token,
    },
  });
};

export default connect(null)(axiosWithAuth);
