import React, { Suspense, useMemo, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerLazy from "./pages/app/AppContainer.lazy";
import AuthLazy from "./pages/auth/Auth.lazy";
import { LOGIN_TOKEN_KEY } from "./api/base.api";
import { User } from "./models/User";
import { useEffect } from "react";
import { me } from "./api/user.api";
import LoaderPulse from "./components/loader/LoaderPulse";
import AppContext from "./App.context";
import NotFoundPage from "./pages/NotFound.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  //this user object, will be be deleted if page is refreshed, and we only get this object when we login.
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LOGIN_TOKEN_KEY);

  useEffect(() => {
    if (!token) return;
    me().then((user) => setUser(user));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // useMemo
  const appContextUserMemo = useMemo(() => ({ user, setUser }), [
    user,
    setUser,
  ]);

  // //This following check is needed otherwise the function will move ahead with user as undefined, because me() is async.
  if (!user && token) {
    return <LoaderPulse />;
  }

  return (
    <>
      <AppContext.Provider value={appContextUserMemo}>
        <Suspense fallback={<LoaderPulse />}>
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
                {token ? <Redirect to="/dashboard" /> : <AuthLazy />}
              </Route>
              <Route path={["/dashboard", "/groups", "/recordings"]} exact>
                {token ? <AppContainerLazy /> : <Redirect to="/login" />}
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </AppContext.Provider>
    </>
  );
};

export default React.memo(App);
