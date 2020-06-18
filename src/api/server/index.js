import axios from "axios";
import constant from "../constants";

const predict = {
  getResult: data => axios.post(`${constant.API_BASE_URL}predict`, data)
};

const serverApi = {
  predict
};

export default serverApi;
