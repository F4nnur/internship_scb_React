import { ENTITIES_NAMES_PLURAL } from "../../../constants/entities";
import { EntitiesReducers } from "./entities.types";
import { combineReducers } from "@reduxjs/toolkit";
import { devicesSlice } from "./devices/devices.reducers";

export const entitiesSlices = {
  [ENTITIES_NAMES_PLURAL.devices]: devicesSlice,
};

// для сортировки имен слайсов по алфавиту
export const sortedEntitiesReducersNamesList = Object.keys(
  entitiesSlices
).sort() as (keyof typeof entitiesSlices)[];

export const entitiesReducers = Object.fromEntries(
  sortedEntitiesReducersNamesList.map((key) => [
    key,
    entitiesSlices[key].reducer,
  ])
) as EntitiesReducers;

export const entitiesReducer = {
  name: "entities",
  reducer: combineReducers(entitiesReducers),
} as const;
