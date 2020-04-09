export default function(state = null, action) {
  switch (action.type) {
    case 'PRODUCT_ADDED':
      return { ...state, productInfo: action.payload };
    default:
      return state;
  }
}
