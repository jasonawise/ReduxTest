const initailState = {
  messageVisibility: false
};

export default function(state = initailState, action) {
  const { type } = action;

  switch (type) {
    case "TOOGLE_MESSAGE":
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };
    default:
      return state;
  }
}
