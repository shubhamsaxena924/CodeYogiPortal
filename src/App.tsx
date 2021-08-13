import React, { Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerLazy from "./pages/app/AppContainer.lazy";
import AuthLazy from "./pages/auth/Auth.lazy";
import { LOGIN_TOKEN_KEY } from "./api/base.api";
import { User } from "./models/User";

interface Props {}

const token = localStorage.getItem(LOGIN_TOKEN_KEY);
const App: React.FC<Props> = (props) => {
  //this user object, will be be deleted if page is refreshed, and we only get this object when we login.
  const [user, setUser] = useState<User>();
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
              {token ? (
                <Redirect to="/dashboard" />
              ) : (
                <AuthLazy onLogin={setUser} />
              )}
            </Route>
            <Route path={["/dashboard", "/groups", "/recordings"]} exact>
              {token ? (
                <AppContainerLazy user={user!} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route>
              <p className="p-4">Page not found. Check the URL!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default React.memo(App);
