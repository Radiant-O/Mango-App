import axios from "axios";

const url = 'http://localhost:3000/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then((response) => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + "signup/", credentials)
      .then((response) => response.data);
  },
  getUser() {
    return axios.get(url + 'user/')
    .then((response) => response.data);
  },
};