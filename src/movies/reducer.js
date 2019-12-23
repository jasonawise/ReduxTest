import { GET_MOVIES } from "./actions";

const initailState = {
  movies: []
};

export default function(state = initailState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data
      };
    default:
      return state;
  }
}
