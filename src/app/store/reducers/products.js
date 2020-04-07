export default function(state = null, action) {
  switch (action.type) {
    case 'PRODUCT_ADDED':
      return { ...state } || false;
    default:
      return state;
  }
}
