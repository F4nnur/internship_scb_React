import {
  Entities,
  EntitiesActionPayload,
  EntitiesNamesPlural,
  EntitiesNamesSingularByPlural,
} from "../store/reducers/entities/entities.types";
import {
  AnyAction,
  EntityAdapter,
  EntityId,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";

export const checkIsEntityId = (maybeId: any): maybeId is EntityId =>
  typeof maybeId === "string" ||
  (typeof maybeId === "number" && !isNaN(maybeId));

export const getEntitiesListWithValidId = <
  Entity extends Entities[keyof Entities]
>(
  entitiesList: Entity[]
): Entity[] => entitiesList.filter((entity) => checkIsEntityId(entity.id));

export const createEntityMatcher =
  <EntityName extends keyof EntitiesNamesPlural>(entityName: EntityName) =>
  (
    action: AnyAction
  ): action is PayloadAction<EntitiesActionPayload<EntityName>> =>
    !!action.payload?.entities?.[entityName]?.length;

export const createEntitiesReducer =
  <EntityName extends keyof EntitiesNamesPlural>(
    entityName: EntityName,
    entityAdapter: EntityAdapter<
      Entities[EntitiesNamesSingularByPlural[EntityName]]
    >
  ) =>
  (
    state: EntityState<Entities[EntitiesNamesSingularByPlural[EntityName]]>,
    action: PayloadAction<EntitiesActionPayload<EntityName>>
  ) => {
    const newEntitiesList = getEntitiesListWithValidId(
      // @ts-ignore
      action.payload.entities[entityName]
    );

    for (let i = 0; i < newEntitiesList.length; i++) {
      const newEntity = newEntitiesList[i];
      // @ts-ignore
      const oldEntity = newEntity.id && state.entities[newEntity.id];
      if (!oldEntity) continue;

      for (const newEntityKey in newEntity) {
        if (newEntity[newEntityKey as keyof typeof newEntity] === undefined) {
          // @ts-ignore
          delete newEntity[newEntityKey];
        }
      }
    }

    // @ts-ignore
    entityAdapter.upsertMany(state, newEntitiesList);
  };
