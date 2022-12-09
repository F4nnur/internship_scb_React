import { ActionType } from "./time.types";

interface StartAt {
  type: ActionType.START_AT;
  payload: string;
}

interface EndAt {
  type: ActionType.End_At;
  payload: string;
}

export type Action = StartAt | EndAt;
