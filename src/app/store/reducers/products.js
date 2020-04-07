export default function(state = null, action) {
  switch (action.type) {
    case 'PRODUCT_ADDED':
      return action.payload || false;
    default:
      return state;
  }
}
