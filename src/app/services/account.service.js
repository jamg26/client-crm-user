import axios from "axios";

export const ROOT_URL = "https://thecrmnetwork20200225035915.azurewebsites.net";
export const ACCOUNT_URL = "api/account";

export function getAccountList() {
  return axios.get(`${ROOT_URL}/${ACCOUNT_URL}`);
}

export function registerAccount (accounts) {
  return axios.post(`${ROOT_URL}/${ACCOUNT_URL}`, accounts);
}

export function updateAccount(accounts) {
  return axios.patch(`${ROOT_URL}/${ACCOUNT_URL}`, accounts);
}

export function deleteAccount(id){
  return axios.delete(`${ROOT_URL}/${ACCOUNT_URL}/${id}`);
}
