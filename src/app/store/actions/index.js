export const addProducts = (data) => (dispatch) => {
  dispatch({ type: 'PRODUCT_ADDED', payload: data });
};

export const pointOfSale = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: 'POINT_OF_SALE', payload: data });
};
