export const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "get_data":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
