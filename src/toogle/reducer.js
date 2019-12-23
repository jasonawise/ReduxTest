import { TOOGLE_MESSAGE } from "./actions";

const initailState = {
  messageVisibility: false
};

export default function(state = initailState, action) {
  const { type, data } = action;

  switch (type) {
    case TOOGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };
    default:
      return state;
  }
}
