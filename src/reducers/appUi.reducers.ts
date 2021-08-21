import { Reducer } from "redux";
import { appUIActions } from "../actions/appUi.actions";

export interface AppUIState {
  title?: string;
}

export const initialState: AppUIState = {};

export const appUIReducer: Reducer<AppUIState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case appUIActions.APP_TOPBAR_TITLE_CHANGE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
