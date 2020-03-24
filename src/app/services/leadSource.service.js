import axios from "axios";

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LEAD_SOURCE_URL = "api/config/leadsource";

export function getLeadSourceList() {

  return axios.get(`${ROOT_URL}/${LEAD_SOURCE_URL}`);
}
