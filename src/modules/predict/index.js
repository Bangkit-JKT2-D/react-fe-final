import {
  START_PREDICT,
  SUCCESS_PREDICT,
  FAIL_PREDICT,
  FINISH_PREDICT
} from "./constant";

const initialState = {
  loading: false,
  error: undefined,
  msg: undefined
};

const progress = {
  start: state => {
    return {
      ...state,
      loading: true
    };
  },
  error: (state, action) => {
    return {
      ...state,
      error: action.error
    };
  },
  success: (state, action) => {
    return {
      ...state,
      msg: action.msg
    };
  },
  finish: state => {
    return {
      ...state,
      loading: false
    };
  }
};

const predictReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PREDICT:
      return progress.start(state);
    case SUCCESS_PREDICT:
      return progress.success(state);
    case FAIL_PREDICT:
      return progress.error(state, action);
    case FINISH_PREDICT:
      return progress.finish(state);
    default:
      return state;
  }
};

export default predictReducer;
