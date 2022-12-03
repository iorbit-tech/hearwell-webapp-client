import axios from "axios";

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

export function getApi(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + url, {
        headers: {
          Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNmY0ZTdiYWFkYzBjMWVhY2ViMjcxMSIsInVzZXJOYW1lIjoicmFodWwiLCJwYXNzd29yZCI6IiQyYiQxMCRqSjFwbDNvOExndFUxTHl3ME03R21lMlpZMWZsSThTMzlyR0toeURMakdjN3M1a1pmQkw2NiIsInVzZXJUeXBlIjoidXNlciIsInN0YXR1cyI6dHJ1ZSwiZmlyc3ROYW1lIjoiUmFodWwiLCJsYXN0TmFtZSI6IktpbmciLCJkb2IiOiIxNC0xMi0xOTk1IiwiZ2VuZGVyIjoibWFsZSIsIm1hcml0YWxTdGF0dXMiOiJzaW5nbGUiLCJhZGRyZXNzMSI6ImFkcmVzcyBsaW5lIDEiLCJhZGRyZXNzMiI6ImFkcmVzcyBsaW5lIDIiLCJjaXR5IjoiVHJpdmFuZHJ1bSIsImNvdW50cnkiOiJJbmRpYSIsInppcCI6IjY5NTU3MSIsImVtYWlsIjoicmFodWxAZ2FtYWlsLmNvbSIsInBob25lIjoiMzQ1NDMzNDU1NDM0IiwidXNlcklkIjoiOGU2NTQ3YjMtNDNkOC00MzVlLWFlNzAtNGI4ZmFjZmQ4MzhkIiwiY3JlYXRlZEF0IjoiMjAyMi0xMS0xMlQwNzo0Mjo1MS4zODJaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0xNFQxMDozNzowMy4wODBaIiwiX192IjowfSwiaWF0IjoxNjY5MTAyOTY2fQ.zNKdeEbuxC7vZZRDZZdVaUvWqXGt_wxtHxW-PYQqaUA'
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
          Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNmY0ZTdiYWFkYzBjMWVhY2ViMjcxMSIsInVzZXJOYW1lIjoicmFodWwiLCJwYXNzd29yZCI6IiQyYiQxMCRqSjFwbDNvOExndFUxTHl3ME03R21lMlpZMWZsSThTMzlyR0toeURMakdjN3M1a1pmQkw2NiIsInVzZXJUeXBlIjoidXNlciIsInN0YXR1cyI6dHJ1ZSwiZmlyc3ROYW1lIjoiUmFodWwiLCJsYXN0TmFtZSI6IktpbmciLCJkb2IiOiIxNC0xMi0xOTk1IiwiZ2VuZGVyIjoibWFsZSIsIm1hcml0YWxTdGF0dXMiOiJzaW5nbGUiLCJhZGRyZXNzMSI6ImFkcmVzcyBsaW5lIDEiLCJhZGRyZXNzMiI6ImFkcmVzcyBsaW5lIDIiLCJjaXR5IjoiVHJpdmFuZHJ1bSIsImNvdW50cnkiOiJJbmRpYSIsInppcCI6IjY5NTU3MSIsImVtYWlsIjoicmFodWxAZ2FtYWlsLmNvbSIsInBob25lIjoiMzQ1NDMzNDU1NDM0IiwidXNlcklkIjoiOGU2NTQ3YjMtNDNkOC00MzVlLWFlNzAtNGI4ZmFjZmQ4MzhkIiwiY3JlYXRlZEF0IjoiMjAyMi0xMS0xMlQwNzo0Mjo1MS4zODJaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0xNFQxMDozNzowMy4wODBaIiwiX192IjowfSwiaWF0IjoxNjY5MTAyOTY2fQ.zNKdeEbuxC7vZZRDZZdVaUvWqXGt_wxtHxW-PYQqaUA'
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
