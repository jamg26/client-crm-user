import axios from "axios";

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const USERINVITE_URL = "api/userinvite";

export function getUserInviteList(businessId) {
  return axios.get(`${ROOT_URL}/${USERINVITE_URL}/${businessId}`);
}

export function getUserInviteData(userInviteId) {
  return axios.get(`${ROOT_URL}/${USERINVITE_URL}/detail/${userInviteId}`);
}

export function addInviteUser (data) {
  return axios.post(`${ROOT_URL}/${USERINVITE_URL}`, data);
}

export function resendInviteUser (data) {
  return axios.post(`${ROOT_URL}/${USERINVITE_URL}/resendinvite`, data);
}

export function acceptInviteUser(data) {
  return axios.post(`${ROOT_URL}/${USERINVITE_URL}/acceptinvite`, data);
}

export function rejectInviteUser(data) {
  return axios.post(`${ROOT_URL}/${USERINVITE_URL}/rejectinvite`, data);
}

export function deleteInviteUser(id){
  return axios.delete(`${ROOT_URL}/${USERINVITE_URL}/${id}`);
}
