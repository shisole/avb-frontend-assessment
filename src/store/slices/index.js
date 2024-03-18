import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentsReducer, { name as commentsName } from "store/slices/comment";

const rootReducer = combineReducers({
  [viewName]: viewReducer,
  [commentsName]: commentsReducer,
});

export default rootReducer;
