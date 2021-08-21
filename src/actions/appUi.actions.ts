export enum appUIActions {
  APP_TOPBAR_TITLE_CHANGE = "app/topbar_title",
}

export const appTitleChangeAction = (title: string) => ({
  type: appUIActions.APP_TOPBAR_TITLE_CHANGE,
  payload: title,
});
