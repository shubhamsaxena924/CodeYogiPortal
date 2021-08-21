import { createSelector } from "reselect";
import { appUIStateSelector } from "./app.selectors";

export const appUITitleSelector = createSelector(
  [appUIStateSelector],
  (appUIState) => appUIState.title
);
