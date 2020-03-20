import axios from "axios";

export const ROOT_URL = "https://thecrmnetwork20200225035915.azurewebsites.net";
export const LEAD_URL = "api/lead";

export function getLeadsList() {
  return axios.get(`${ROOT_URL}/${LEAD_URL}`);
}

export function registerLead (lead) {
  return axios.post(`${ROOT_URL}/${LEAD_URL}`, lead);
}

export function updateLead(lead) {
  return axios.patch(`${ROOT_URL}/${LEAD_URL}`, lead);
}

export function deleteLead(id){
  return axios.delete(`${ROOT_URL}/${LEAD_URL}/${id}`);
}
