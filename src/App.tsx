import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import { LOGIN_TOKEN_KEY } from "./api/base.api";

interface Props {}
const token = localStorage.getItem(LOGIN_TOKEN_KEY);
const App: React.FC<Props> = (props) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-auth-primary left-1/2 top-1/2 animate-pulse"></div>
        }
      >
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
              {token ? <Redirect to="/dashboard" /> : <AuthPage />}
            </Route>
            <Route path={["/dashboard", "/groups", "/recordings"]} exact>
              <AppContainerPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default React.memo(App);
