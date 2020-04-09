export default function(state = null, action) {
  switch (action.type) {
    case 'POINT_OF_SALE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
