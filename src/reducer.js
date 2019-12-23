import { TOOGLE_MESSAGE, GET_MOVIES } from "./actions";

const initailState = {
  messageVisibility: false,
  movies: []
};

export default function(state = initailState, action) {
  const { type, data } = action;

  switch (type) {
    case TOOGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: data
      };
    default:
      return state;
  }
}
