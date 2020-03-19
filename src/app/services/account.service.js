import axios from "axios";

export const ROOT_URL = "https://thecrmnetwork20200225035915.azurewebsites.net";
export const GET_ACCOUNT_LIST = "api/account";
export const REGISTER_ACCOUNT = "api/account";

export function getAccountList() {
  return axios.get(`${ROOT_URL}/${GET_ACCOUNT_LIST}`);
}

export function registerAccount () {
  // return axios.post(`${ROOT_URL}/${REGISTER_ACCOUNT}`);
}
