import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LEAD_URL = 'api/lead';
export const GET_LEAD_TABL_VIEW_URL = 'api/lead/tableview';

export function getLeadsList() {
  return axios.get(`${ROOT_URL}/${GET_LEAD_TABL_VIEW_URL}`);
}

export function getLeadsDetails(leadId) {
  return axios.get(`${ROOT_URL}/${LEAD_URL}/${leadId}`);
}

export function registerLead(lead) {
  return axios.post(`${ROOT_URL}/${LEAD_URL}`, lead);
}

export function updateLead(lead) {
  return axios.patch(`${ROOT_URL}/${LEAD_URL}`, lead);
}

export function deleteLead(id) {
  return axios.delete(`${ROOT_URL}/${LEAD_URL}/${id}`);
}
