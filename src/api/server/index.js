import axios from "axios";
import constant from "../constants";

const predict = {
  getResult: img =>
    axios.post(`${constant.API_BASE_URL}predict`, {
      file: img
    })
};

const serverApi = {
  predict
};

export default serverApi;
