import axios from "axios";

const API_URL = "https://api-web-2021.herokuapp.com/api/";
let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'https://api-web-2021.herokuapp.com');
  headers.append('Access-Control-Allow-Credentials', 'true');
const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
  },{header: headers} );
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    },{header: headers})
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};