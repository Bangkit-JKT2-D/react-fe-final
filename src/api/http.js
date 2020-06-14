import axios from "axios";

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token
    ? `Token ${token}`
    : "None";
};
