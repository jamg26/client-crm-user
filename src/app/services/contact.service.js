import axios from "axios";

export const ROOT_URL = "https://thecrmnetwork20200225035915.azurewebsites.net";
export const CONTACTS_URL = "api/contact";

export function getContactList() {
  return axios.get(`${ROOT_URL}/${CONTACTS_URL}`);
}

export function addContacts (contact) {
  return axios.post(`${ROOT_URL}/${CONTACTS_URL}`, contact);
}

// export function updateAccount(accounts) {
//   return axios.patch(`${ROOT_URL}/${ACCOUNT_URL}`, accounts);
// }

// export function deleteAccount(id){
//   return axios.delete(`${ROOT_URL}/${ACCOUNT_URL}/${id}`);
// }
