import { Entity } from "../models/Entity";

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
  selectedId?: number; //Use this to show the selected id page, even when reloaded. //Also, we cannot pass id as param to selector, it only takes state in parameters.
  loadingOne: boolean;
  fetchOneError?: string;
  loadingList: boolean;
}

export const initialEntityState = {
  byId: {},
  loadingOne: false,
  loadingList: false,
};

export const getEntityIds = (entities: Entity[]) => {
  return entities.map((e) => e.id);
};

export const addOne = (
  state: EntityState,
  entity: Entity,
  loading?: boolean
) => {
  const newLoading = loading === undefined ? state.loadingOne : loading;
  return {
    ...state,
    byId: { ...state.byId, [entity.id]: entity },
    loadingOne: newLoading,
  };
};

export const addMany = (state: EntityState, entities: Entity[]) => {
  if (entities.length === 0) {
    return state;
  }

  const entityMap = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity };
  }, {});

  return { ...state, byId: { ...state.byId, ...entityMap } };
};

export const setSelectedId = (state: EntityState, selectedId: number) => ({
  ...state,
  selectedId: selectedId,
  loadingOne: true,
  fetchOneError: undefined, //For the new selectedId, we will make error undefined
});

export const setFetchOneError = (
  state: EntityState,
  selectedId: number,
  message: string
) => {
  if (state.selectedId !== selectedId) {
    return state;
  }
  return { ...state, fetchOneError: message, loadingOne: false };
};
