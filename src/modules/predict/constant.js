export const START_PREDICT = "src/START_PREDICT";
export const FAIL_PREDICT = "src/FAIL_PREDICT";
export const SUCCESS_PREDICT = "src/SUCCESS_PREDICT";
export const FINISH_PREDICT = "src/FINISH_PREDICT";

export const predictAction = {
  start: () => {
    return {
      type: START_PREDICT
    };
  },
  fail: err => {
    return {
      type: FAIL_PREDICT,
      error: err
    };
  },
  success: msg => {
    return {
      type: SUCCESS_PREDICT,
      msg
    };
  },
  finish: () => {
    return {
      type: FINISH_PREDICT
    };
  }
};
