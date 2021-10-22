import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (props) => {
  const { axiosWithAuth } = props;
  return axiosWithAuth()
    .get(`/items`)
    .then((res) => {
      const { data } = res;
      return data;
    });
};

export default connect(null, { axiosWithAuth })(articleService);

// this requests using axiosWithAuth to verify the user and place a request for all the data to the server to retrieve from the database.
