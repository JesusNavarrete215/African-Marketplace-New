import {
  FETCH_SUCCESS,
  FETCH_START,
  FETCH_FAIL,
  ADD_ITEM,
  ERROR_MESSAGE,
  SET_ITEMS,
  VERIFY_USER,
} from "./../actions/index";

export const initialState = {
  credentials: { username: "", password: "" },
  item: [],
  isLoading: false,
  error: "",
  errorMessage: "",
};

// name: "shoes",
// location: "",
// category: "",
// description: "",
// price: 20,
// user_id: 1,

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_USER:
      return {
        ...state,
        credentials: [...state, action.payload],
      };
    case SET_ITEMS:
      return {
        ...state,
        item: [action.payload],
      };
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        item: [],
        isLoading: false,
        error: action.payload,
      };
    case ADD_ITEM:
      const newItem = {
        ...action.payload,
        id: state.item.length() + 1,
      };
      return {
        ...state,
        item: [...state.item, newItem],
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: state.errorMessage,
      };
    default:
      return state;
  }
};
