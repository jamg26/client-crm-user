export const addProducts = (data) => (dispatch) => {
  dispatch({ type: 'PRODUCT_ADDED', payload: data });
};
