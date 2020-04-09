import axios from 'axios';
export const ROOT_URL = process.env.REACT_APP_API_URL;
export const BUSINESS_URL = 'api/business';
export const BUSINESS_LOCATION_URL = 'api/businesslocation';
export const BUSINESS_LOCATION_LIST_URL = 'api/business/businesslocation';
export const BUSINESS_USER_URL = 'api/config/leadsource/users';

export function getBusiness() {
  return axios.get(`${ROOT_URL}/${BUSINESS_URL}`);
}

export function getBusinessLocationList(data) {
  return axios.get(`${ROOT_URL}/${BUSINESS_LOCATION_LIST_URL}/${data}`);
}

export function getBusinessLocationData(data) {
  return axios.get(`${ROOT_URL}/${BUSINESS_LOCATION_URL}/${data}`);
}

export function saveBusinessLocation(data) {
  return axios.post(`${ROOT_URL}/${BUSINESS_LOCATION_URL}`, data);
}

export function deleteBusinessLocation(id) {
  return axios.delete(`${ROOT_URL}/${BUSINESS_LOCATION_URL}/${id}`);
}

export function updateBusinessLocation(newData) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_LOCATION_URL}`, newData);
}

export function updateBusinessProfile(newData) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_URL}`, newData);
}

// logo & banner

export function updateBusinessLogo(id, data) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_URL}/businesslogo/${id}`, data);
}

export function updateBusinessBanner(id, data) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_URL}/businessbanner/${id}`, data);
}

export function removeBusinessLogo(id) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_URL}/removebusinesslogo/${id}`, {
    BusinessId: id,
  });
}

export function removeBusinessBanner(id) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_URL}/removebusinessbanner/${id}`, {
    BusinessId: id,
  });
}

export function getBusinessUsers(id) {
  return axios.get(`${ROOT_URL}/${BUSINESS_USER_URL}/${id}`);
}
