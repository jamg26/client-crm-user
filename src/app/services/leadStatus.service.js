import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LEAD_STATUS_URL = 'api/config/leadstatus';

export function getLeadStatus(businessId) {
  return axios.get(`${ROOT_URL}/${LEAD_STATUS_URL}/${businessId}`);
}

export function addLeadStatus(data) {
  return axios.post(`${ROOT_URL}/${LEAD_STATUS_URL}`, data);
}

export function updateLeadStatus(data) {
  return axios.patch(`${ROOT_URL}/${LEAD_STATUS_URL}`, data);
}

export function deleteLeadStatus(id) {
  return axios.delete(`${ROOT_URL}/${LEAD_STATUS_URL}/${id}`);
}
