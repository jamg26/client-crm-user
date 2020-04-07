export const addProducts = (data) => (dispatch) => {
  console.log('wewewe');
  dispatch({ type: 'PRODUCT_ADDED', payload: data });
};
