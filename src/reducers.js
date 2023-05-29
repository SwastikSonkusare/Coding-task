export const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "add_data":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
