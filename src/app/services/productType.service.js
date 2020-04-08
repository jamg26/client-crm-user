import axios from "axios";

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const PRODUCT_TYPE_URL = "api/product/producttype";

export function getProductTypeList(businessId) {
  return axios.get(`${ROOT_URL}/${PRODUCT_TYPE_URL}/${businessId}`);
}

