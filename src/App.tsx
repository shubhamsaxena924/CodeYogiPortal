import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LOGIN_TOKEN_KEY } from "./api/login.api";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";

interface Props {}
const token = localStorage.getItem(LOGIN_TOKEN_KEY);
const App: React.FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? (
              <Redirect to="/dashboard"></Redirect>
            ) : (
              <Redirect to="/login"></Redirect>
            )}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage />
          </Route>
          <Route path={["/dashboard", "/groups", "/recordings"]} exact>
            <AppContainerPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default React.memo(App);
