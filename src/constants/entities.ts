import {
  EntitiesIdsNames,
  EntitiesNamesPlural,
  EntitiesNamesSingular,
} from "../store/reducers/entities/entities.types";

export const entitiesNamesSingularDictionary = {
  device: "device",
} as const;
// Имена сущностей в ед. числе в виде: { device: 'device' }
export const ENTITIES_NAMES_SINGULAR =
  entitiesNamesSingularDictionary as EntitiesNamesSingular;

export const entitiesNamesPluralDictionary = {
  [ENTITIES_NAMES_SINGULAR.device]: "devices",
} as const;

// Имена сущностей во мн. числе в виде: { devices: 'devices' }
export const ENTITIES_NAMES_PLURAL = Object.fromEntries(
  Object.values(entitiesNamesPluralDictionary).map((value) => [value, value])
) as EntitiesNamesPlural;

export const entitiesIdsNamesDictionary = {
  [ENTITIES_NAMES_SINGULAR.device]: "deviceId",
} as const;

// Имена Id сущностей в ед. числе в виде: { deviceId: 'deviceId' }
export const ENTITIES_IDS_NAMES = Object.fromEntries(
  Object.entries(ENTITIES_NAMES_SINGULAR).map((value) => [
    value[0] + "Id",
    value[1] + "Id",
  ])
) as EntitiesIdsNames;
