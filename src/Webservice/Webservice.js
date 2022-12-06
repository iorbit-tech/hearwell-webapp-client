import axios from "axios";
import { authToken } from "../utils/authChecker";

export const baseUrl = 'http://178.128.165.237:8000';

export const postApi = (url, data) => {
  axios
    .post(url, data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export function postApiCall(url, data) {
  console.log(authToken, 'authToken');
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data, {
        headers: {
          Authorization: 'Bearer ' + authToken
        }
      }
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(url, 'url POST');
      });
  });
}

export function getApi(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        headers: {
          Authorization: 'Bearer ' + authToken
        }
      }
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(url, 'url GET');
      });
  });
}

export function deleteApi(url) {
  return new Promise((resolve, reject) => {
    axios
      .delete(baseUrl + url, {
        headers: {
          Authorization: 'Bearer ' + authToken
        }
      }
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(url, 'url GET');
      });
  });
}
