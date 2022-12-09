import { Dispatch } from "@reduxjs/toolkit";
import { Action } from "../../reducers/timers/time.actions";
import { ActionType } from "../../reducers/timers/time.types";

export const startAt = (time: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.START_AT,
    payload: time,
  });
};

export const endAt = (time: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.End_At,
    payload: time,
  });
};
