import axios from "axios";
import { authToken } from "../utils/authChecker";

export const baseUrl = 'http://178.128.165.237:8000';

export const postApi = (url, data) => {
  console.log(url, 'url POST');
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + url, data, {
        // headers: {
        //   Authorization: 'Bearer ' + authToken
        // }
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
};

export function postApiCall(url, data) {
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

export const updateApi = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(baseUrl + url, data, {
        headers: {
          Authorization: 'Bearer ' + authToken
        }
      })
      .then(response => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  })
};

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
