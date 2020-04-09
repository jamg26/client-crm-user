import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const CONTACTS_URL = 'api/contact';

export function getContactList() {
  return axios.get(`${ROOT_URL}/${CONTACTS_URL}`);
}

export function addContacts(contact) {
  return axios.post(`${ROOT_URL}/${CONTACTS_URL}`, contact);
}

export function updateContact(contact) {
  return axios.patch(`${ROOT_URL}/${CONTACTS_URL}`, contact);
}

export function deleteContact(id) {
  return axios.delete(`${ROOT_URL}/${CONTACTS_URL}/${id}`);
}
