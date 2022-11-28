import axios from "axios";

export const baseUrl = "http://localhost:8000";

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
