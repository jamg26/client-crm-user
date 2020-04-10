import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const BUSINESS_CREATE_ORDER_URL = 'api/BusinessSale/CreateOrder';

export function createOrder(data) {
  return axios.post(`${ROOT_URL}/${BUSINESS_CREATE_ORDER_URL}`, data);
}
