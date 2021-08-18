import { AnyAction, Reducer } from "redux";
import { GroupActions } from "../actions/groups.actions";
import { Group } from "../models/Group";
import { addMany, EntityState, getEntityIds } from "./entity.reducers";

export interface GroupState extends EntityState<Group> {
  query: string;
  loadingQuery: boolean;
  // loadingQuery: { [query: string]: boolean };
  queryMap: { [query: string]: number[] };
  selectedId?: number; //Use this to show the group detail page, even when reloaded.
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loadingQuery: false,
};

export const groupReducer: Reducer<GroupState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GroupActions.GROUPS_QUERY:
      return {
        ...state,
        query: action.payload,
        loadingQuery: true,
      };

    case GroupActions.GROUPS_FETCH:
      const groups = action.payload.groups as Group[];
      const groupIDs = getEntityIds(groups); //return ids of groups fetched for the query searched
      // const groupMap = groups.reduce((prev, group) => {
      //   return { ...prev, [group.id]: group };
      // }, {});
      const newState = addMany(state, groups) as GroupState;

      return {
        // ...state,
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIDs,
        },
        loadingQuery: false,
        // byId: { ...state.byId, ...groupMap }, not needed, because new state is already updated
      }; //update groups for particular search

    default:
      return state;
  }
};
