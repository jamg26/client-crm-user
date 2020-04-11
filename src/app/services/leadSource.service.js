import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LEAD_SOURCE_URL = 'api/config/leadsource';
export const ASSIGN_LEAD_SOURCE_URL = 'api/Lead/AssignUserToLeadSource'; //'api/config/leadsource/assign';
export const LEAD_SOURCE_USER_URL = 'api/config/leadsource/users';

// new api
export const GET_LEAD_SOURCE_USERS = 'api/Lead/GetAllLeadUsersByLeadSourceIdAndBusinessKey';

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

export function assignLeadSource(id, data) {
  return axios.post(`${ROOT_URL}/${ASSIGN_LEAD_SOURCE_URL}?LeadSourceId=${id}`, data);
}

export function getLeadSourceUsers(id, bId) {
  return axios.get(`${ROOT_URL}/${GET_LEAD_SOURCE_USERS}?LeadSourceId=${id}&businessId=${bId}`);
}
