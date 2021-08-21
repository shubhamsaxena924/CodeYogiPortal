import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;

export const authStateSelector = (state: AppState) => state.auth;

export const userStateSelector = (state: AppState) => state.users;

export const appUIStateSelector = (state: AppState) => state.appUI;
