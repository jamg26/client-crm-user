import { combineReducers } from 'redux';
import products from './products';
import pointOfSale from './pointOfSale';

export default combineReducers({
  products,
  pointOfSale,
});
