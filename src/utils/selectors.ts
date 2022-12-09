import { createSelector, EntitySelectors } from "@reduxjs/toolkit";
import { Entities } from "../store/reducers/entities/entities.types";
import { AppState } from "../store/store";

/**
 * Возвращает функцию оборачивающую вызов .selectById(), что бы отбросить неиспользуемые параметры
 */
export const createEntityByIdSelector = <
    Entity extends Entities[keyof Entities]
    >(
    selector: EntitySelectors<Entity, AppState>["selectById"]
) => {
    return (state: AppState, entityId: Entity["id"] | undefined | null) => {
        if (entityId === undefined || entityId === null) return;
        return selector(state, entityId);
    };
};

/**
 * Возвращает функцию для использования переданного селектора в хуке useSelector
 */
export const createSelectEntityByIdFunc = <
    Entity extends Entities[keyof Entities]
    >(
    selector: (
        state: AppState,
        entityId: Entity["id"] | undefined | null
    ) => undefined | Entity
) => {
    return (entityId: Entity["id"] | undefined | null) => (state: AppState) =>
        selector(state, entityId);
};

/**
 * Создает реселект вызывающий переданный .selectAll() и возвращает функцию,
 * оборачивающую вызов реселекта, что бы отбросить неиспользуемые параметры
 */
export const createAllEntitiesListSelector = <
    Entity extends Entities[keyof Entities]
    >(
    allEntitiesListSelector: EntitySelectors<Entity, AppState>["selectAll"]
) => {
    const selector = createSelector(
        [allEntitiesListSelector],
        (allEntitiesList) => {
            if (!allEntitiesList.length) return;
            return allEntitiesList;
        }
    );

    return (state: AppState) => selector(state);
};

/**
 * Создает реселект вызывающий переданный .selectEntities() и возвращает функцию,
 * оборачивающую вызов реселекта, что бы отбросить неиспользуемые параметры
 */
export const createAllEntitiesSelector = <
    Entity extends Entities[keyof Entities]
    >(
    allEntitiesSelector: EntitySelectors<Entity, AppState>["selectEntities"]
) => {
    const selector = createSelector(
        [allEntitiesSelector],
        (allEntities) => allEntities
    );

    return (state: AppState) => selector(state);
};

export const createEntityReSelectors = <
    Entity extends Entities[keyof Entities]
    >(
    selectors: EntitySelectors<Entity, AppState>
) => {
    const byIdSelector = createEntityByIdSelector(selectors.selectById);
    const selectById = createSelectEntityByIdFunc(byIdSelector);
    const allListSelector = createAllEntitiesListSelector(selectors.selectAll);
    const allEntitiesSelector = createAllEntitiesSelector(
        selectors.selectEntities
    );

    return {
        byIdSelector,
        selectById,
        allListSelector,
        allEntitiesSelector,
    };
};