import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const USER_TYPE_URL = 'api/usertype';

export function getUserTypeList(businessId) {
  return axios.get(`${ROOT_URL}/${USER_TYPE_URL}/${businessId}`);
}

export function addUserType(request) {
  return axios.post(`${ROOT_URL}/${USER_TYPE_URL}`, request);
}

export function updateUserType(request) {
  return axios.patch(`${ROOT_URL}/${USER_TYPE_URL}`, request);
}

export function deleteUserType(id) {
  return axios.delete(`${ROOT_URL}/${USER_TYPE_URL}/${id}`);
}
