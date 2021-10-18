import {
  FETCH_SUCCESS,
  FETCH_START,
  FETCH_FAIL,
  ADD_ITEM,
  ERROR_MESSAGE,
} from "./../actions/index";

export const initialState = {
  credentials: { username: "", password: "" },
  item: [],
  isLoading: false,
  error: "",
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        id: item.length() + 1,
      };
      return {
        ...state,
        item: [...state.item, newItem],
      };
    default:
      return state;
  }
};
