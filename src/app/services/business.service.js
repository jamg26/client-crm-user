import axios from "axios";
export const ROOT_URL = process.env.REACT_APP_API_URL;
export const BUSINESS_URL = "api/business";

export function getBusinessProfile() {
  return axios.get(`${ROOT_URL}/${BUSINESS_URL}`);
}

