import { Profile, ProfileState, UserId } from "./profile.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfile } from "../../actions/profile.actions";
import { ReducerSingulars } from "../../../constants/reducerLIst";

const initialState: ProfileState = {
  id: 0 as UserId,
};

export const profileReducer = createSlice({
  name: ReducerSingulars.Profile,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProfile.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state = action.payload;
      }
    );
  },
});
