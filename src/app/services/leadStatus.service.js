import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LEAD_SOURCE_URL = 'api/config/leadstatus';

export function getLeadStatus(businessId) {
  return axios.get(`${ROOT_URL}/${LEAD_SOURCE_URL}/${businessId}`);
}
