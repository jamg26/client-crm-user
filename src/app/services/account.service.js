import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const ACCOUNT_URL = 'api/account';
export const ACCOUNT_INDUSTRY = 'api/config/industry';
export const ACCOUNT_TYPE = 'api/config/accounttype';
export const ACCOUNT_PARENT = 'api/Lead/TableView/Business';

export function getAccountList() {
  return axios.get(`${ROOT_URL}/${ACCOUNT_URL}`);
}

export function registerAccount(accounts) {
  return axios.post(`${ROOT_URL}/${ACCOUNT_URL}`, accounts);
}

export function updateAccount(accounts) {
  return axios.patch(`${ROOT_URL}/${ACCOUNT_URL}`, accounts);
}

export function deleteAccount(id) {
  return axios.delete(`${ROOT_URL}/${ACCOUNT_URL}/${id}`);
}

export function getIndustry() {
  return axios.get(`${ROOT_URL}/${ACCOUNT_INDUSTRY}`);
}

export function getAccountType() {
  return axios.get(`${ROOT_URL}/${ACCOUNT_INDUSTRY}`);
}

export function getParentAccount(id) {
  return axios.get(`${ROOT_URL}/${ACCOUNT_PARENT}/${id}`);
}
