import { Reducer } from "redux";
import { GroupActions } from "../actions/groups.actions";
import { Group } from "../models/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  };

  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GroupActions.GROUPS_QUERY:
      return { ...state, query: action.payload };

    case GroupActions.GROUPS_FETCH:
      const groups = action.payload.groups as Group[];
      const groupIDs = groups.map((g) => g.id); //return ids of groups fetched for the query searched
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIDs,
        },
        byId: { ...state.byId, ...groupMap },
      }; //update groups for particular search

    default:
      return state;
  }
};
