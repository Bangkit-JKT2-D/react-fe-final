import { predictAction } from "./constant";
import serverApi from "../../api/server";

export const predictThunk = {
  getResult: img => {
    return dispatch => {
      dispatch(predictAction.start());
      const body = serverApi.predict.getResult(img);
      body
        .then(res => {
          console.log(res);
          dispatch(predictAction.success(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
};
