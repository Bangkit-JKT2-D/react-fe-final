import { predictAction } from "./constant";
import serverApi from "../../api/server";

const convertImageForm = data => {
  const form = new FormData();
  form.set("file", data.src.file);
  return form;
};

export const predictThunk = {
  getResult: img => {
    return dispatch => {
      dispatch(predictAction.start());
      const body = serverApi.predict.getResult(convertImageForm(img));
      body.then(res => {
        dispatch(predictAction.success(res.data));
      });
      // dispatch(predictAction.finish());
    };
  }
};
