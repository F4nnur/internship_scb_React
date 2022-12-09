import { combineReducers } from "@reduxjs/toolkit";
import { Action } from "./time.actions";
import { ActionType } from "./time.types";

const initialState = [""];

const reducer = (state: string[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.START_AT:
      return [...state, action.payload];
    case ActionType.End_At:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const timeReducer = {
  name: "time",
  reducer: combineReducers({ reducer: reducer }),
};

export default reducer;
