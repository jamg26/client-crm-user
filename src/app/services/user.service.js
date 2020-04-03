import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const LOGIN_URL = 'auth';
export const REGISTER_URL = 'auth/register';
export const REQUEST_PASSWORD_URL = 'api/auth/forgot-password';
export const ME_URL = 'api/user';
export const CHANGE_PASSWORD_URL = 'auth/changepassword';

export function login(email, password) {
  return axios.post(`${ROOT_URL}/${LOGIN_URL}`, { email, password });
}

export function register(email, fullname, businessName, username, password) {
  return axios.post(`${ROOT_URL}/${REGISTER_URL}`, {
    email,
    fullname,
    businessName,
    username,
    password,
  });
}

export function requestPassword(email) {
  return axios.get(`${ROOT_URL}/${REQUEST_PASSWORD_URL}/${email}`);
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(`${ROOT_URL}/${ME_URL}`);
}

export function changePassword(data) {
  return axios.post(`${ROOT_URL}/${CHANGE_PASSWORD_URL}`, data);
}
