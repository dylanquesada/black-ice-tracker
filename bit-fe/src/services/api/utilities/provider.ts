import axios from "axios";
import { handleResponse, handleError } from "./response";

const BASE_URL = "http://localhost:5000/api";

const getAll = (resource: string) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

const getOne = (resource: string, id: number) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource: string, model: any) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

const patch = (resource: string, model: any) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

const put = (resource: string, model: any) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

const remove = (resource: string, id: number) => {
  return axios
    .delete(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getOne,
  post,
  put,
  patch,
  remove,
};
