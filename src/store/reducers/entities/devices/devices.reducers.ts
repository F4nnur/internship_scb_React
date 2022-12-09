import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ReducerPlurals } from "../../../../constants/reducerLIst";
import { fetchDevices } from "../../../actions/entities/devices.actions";
import { Device } from "./devices.types";
import {
  createEntityMatcher,
  createEntitiesReducer,
} from "../../../../utils/store";

type InitialState = {};

export const devicesAdapter = createEntityAdapter<Device>();

const EntityName = ReducerPlurals.Devices;

export const devicesSlice = createSlice({
  name: EntityName,
  initialState: devicesAdapter.getInitialState<InitialState>({}),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchDevices.fulfilled,
        (state, action: PayloadAction<Device[]>) => {
          devicesAdapter.setAll(state, action.payload);
        }
      )
      .addMatcher(
        createEntityMatcher(EntityName),
        createEntitiesReducer(EntityName, devicesAdapter)
      );
  },
});
