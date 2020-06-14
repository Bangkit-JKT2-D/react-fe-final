/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import globalReducer from "./../globalReducer";
import predictReducer from "./predict";

export default history =>
  combineReducers({
    router: connectRouter(history),
    predict: predictReducer
  });
