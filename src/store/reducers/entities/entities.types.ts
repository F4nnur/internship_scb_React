import {
  ENTITIES_NAMES_SINGULAR,
  entitiesIdsNamesDictionary,
  entitiesNamesPluralDictionary,
  entitiesNamesSingularDictionary,
} from "../../../constants/entities";
import { entitiesSlices } from "./entities.reducer";
import { Device } from "./devices/devices.types";

// входная точка для добавления нового слайса сущности
// сущность должна иметь поле id!
// при изменении необходимо также обновить:
// 1. entitiesNamesSingularDictionary
// 2. entitiesNamesPluralDictionary
// 3. entitiesIdsNamesDictionary
// 4. entitiesSlices
export type Entities = {
  device: Device;
};

export type EntitiesNamesSingular = {
  [key in keyof Entities]: typeof entitiesNamesSingularDictionary[key];
};

// для получения из имени сущности во мн. числе имя сущности в ед. числе
export type EntitiesNamesSingularByPlural = {
  [key in keyof Entities as typeof entitiesNamesPluralDictionary[key]]: key;
};

export type EntitiesNamesPlural = {
  [key in keyof Entities as typeof entitiesNamesPluralDictionary[key]]: typeof entitiesNamesPluralDictionary[key];
};

export type EntitiesActionPayload<
  EntityName extends keyof EntitiesNamesPlural
> = {
  entities: PickEntitiesActionPayload<EntityName>;
};

export type PickEntitiesActionPayload<
  EntityName extends keyof EntitiesNamesPlural
> = {
  [key in EntityName]: Entities[EntitiesNamesSingularByPlural[key]][];
};

export type EntitiesIdsNames = {
  [key in keyof typeof ENTITIES_NAMES_SINGULAR as `${key}Id`]: typeof entitiesIdsNamesDictionary[key];
};

export type EntitiesReducers = {
  [key in keyof EntitiesNamesPlural]: typeof entitiesSlices[key]["reducer"];
};
