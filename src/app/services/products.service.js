import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const PRODUCT_URL = 'api/product/infobybusinessid';
export const ADD_PRODUCT_URL = 'api/product/addnewproduct';
export const GET_PRODUCT_URL = 'api/Product/Info/Active';

export function getProductList(businessId) {
  return axios.get(`${ROOT_URL}/${PRODUCT_URL}/${businessId}`);
}

export function getProducts(businessId) {
  return axios.get(`${ROOT_URL}/${GET_PRODUCT_URL}/${businessId}`);
}

export function addProduct(data) {
  return axios.post(`${ROOT_URL}/${ADD_PRODUCT_URL}`, data);
}
