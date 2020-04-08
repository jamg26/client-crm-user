import axios from "axios";

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const PRODUCT_URL = "api/product/infobybusinessid";

export function getProductList(businessId) {
  return axios.get(`${ROOT_URL}/${PRODUCT_URL}/${businessId}`);
}

