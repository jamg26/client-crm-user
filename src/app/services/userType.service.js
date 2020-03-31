import axios from "axios";

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const USER_TYPE_URL = "api/business/usertype";

export function getUserTypeList(businessId) {
  return axios.get(`${ROOT_URL}/${USER_TYPE_URL}/${businessId}`);
}

