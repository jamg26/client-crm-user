import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LEAD_SOURCE_URL = 'api/config/leadsource';

export function getLeadSourceList(id) {
  return axios.get(`${ROOT_URL}/${LEAD_SOURCE_URL}/${id}`);
}
export function addLeadSource(data) {
  return axios.post(`${ROOT_URL}/${LEAD_SOURCE_URL}`, data);
}

export function updateLeadSource(data) {
  return axios.patch(`${ROOT_URL}/${LEAD_SOURCE_URL}`, data);
}

export function deleteLeadSource(id) {
  return axios.delete(`${ROOT_URL}/${LEAD_SOURCE_URL}/${id}`);
}
