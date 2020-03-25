import axios from "axios";
export const ROOT_URL = process.env.REACT_APP_API_URL;
export const BUSINESS_URL = "api/business";
export const BUSINESS_LOCATION_URL = "api/businesslocation";


export function getBusinessLocationList(data) {
  return axios.get(`${ROOT_URL}/${BUSINESS_LOCATION_URL}/${ data }`);
}

export function saveBusinessLocation(data) {
  return axios.post(`${ROOT_URL}/${BUSINESS_LOCATION_URL}`, data );
}

export function deleteBusinessLocation(id) {
  return axios.delete(`${ROOT_URL}/${BUSINESS_LOCATION_URL}/${id}`);
}


export function updateBusinessLocation(newData) {
  return axios.patch(`${ROOT_URL}/${BUSINESS_LOCATION_URL}`, newData);
}
