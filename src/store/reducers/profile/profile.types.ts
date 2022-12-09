import { Brand } from "../../../constants/types";

export type ProfileState = {
  id?: UserId;
};

export type UserId = Brand<number, "user_id">;

export type Profile = ProfileState;
