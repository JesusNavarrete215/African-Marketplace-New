import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_ITEM = "ADD_ITEM";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const VERIFY_USER = "VERIFY_USER";
export const SET_ITEMS = "SET_ITEMS";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ FETCH_START });
    axios
      .get(`http://localhost:6000/api/users`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
        dispatch(setError("Something went wrong, please try again"));
      });
  };
};

export const verifyUser = (user) => {
  return { type: VERIFY_USER, payload: user };
};

export const setItems = (value) => {
  return { type: SET_ITEMS, payload: value };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item };
};
export const errorMessage = () => {
  return { type: ERROR_MESSAGE };
};
export const setError = (err) => {
  return { type: ERROR_MESSAGE, payload: err };
};
