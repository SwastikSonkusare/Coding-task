export const addData = (data) => {
  return {
    type: "get_data",
    payload: data,
  };
};
