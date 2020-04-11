import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const CATEGORY_URL = 'api/category';
export const SUB_CATEGORY_URL = 'api/category/subCategory';

export function getCategoryList(businessId) {
  return axios.get(`${ROOT_URL}/${CATEGORY_URL}/all/${businessId}`);
}

export function registerCategory(category) {
  return axios.post(`${ROOT_URL}/${CATEGORY_URL}`, category);
}

export function updateCategory(category) {
  return axios.patch(`${ROOT_URL}/${CATEGORY_URL}`, category);
}

export function deleteCategory(id) {
  return axios.delete(`${ROOT_URL}/${CATEGORY_URL}/${id}`);
}

export function getSubCategoryList(categoryId) {
  return axios.get(`${ROOT_URL}/${CATEGORY_URL}/SubCategoryByCategory/all/${categoryId}`);
}

export function registerSubCategory(category) {
  return axios.post(`${ROOT_URL}/${SUB_CATEGORY_URL}`, category);
}

export function updateSubCategory(category) {
  return axios.patch(`${ROOT_URL}/${SUB_CATEGORY_URL}`, category);
}

export function deleteSubCategory(id) {
  return axios.delete(`${ROOT_URL}/${SUB_CATEGORY_URL}/${id}`);
}
