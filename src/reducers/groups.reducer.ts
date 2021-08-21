import { AnyAction, Reducer } from "redux";
import { GroupActions } from "../actions/groups.actions";
import { Group } from "../models/Group";
import {
  addMany,
  addOne,
  EntityState,
  getEntityIds,
  initialEntityState,
  setFetchOneError,
  setSelectedId,
} from "./entity.reducers";

export interface GroupState extends EntityState<Group> {
  query: string;
  // loadingQuery: { [query: string]: boolean };
  queryMap: { [query: string]: number[] };
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
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
        loadingList: true,
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
        loadingList: false,
        // byId: { ...state.byId, ...groupMap }, not needed, because new state is already updated
      }; //update groups for particular search

    case GroupActions.GROUP_QUERY_SINGLE:
      return setSelectedId(state, action.payload) as GroupState;

    case GroupActions.GROUP_FETCH_SINGLE:
      return addOne(state, action.payload, false) as GroupState;

    case GroupActions.GROUP_FETCH_SINGLE_ERROR:
      const { selectedId, message } = action.payload;
      return setFetchOneError(state, selectedId, message) as GroupState;
    default:
      return state;
  }
};
