import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerLazy from "./pages/app/AppContainer.lazy";
import AuthLazy from "./pages/auth/Auth.lazy";
import { LOGIN_TOKEN_KEY } from "./api/base.api";
import { useEffect } from "react";
// import { me } from "./api/me.api";
import LoaderPulse from "./components/loader/LoaderPulse";
import NotFoundPage from "./pages/NotFound.page";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./store";
// import { meFetchAction } from "./actions/auth.actions";
import { meSelector } from "./selectors/auth.selectors";
// import { meMidWare } from "./middlewares/auth.middleware";
import { meRequestAction } from "./actions/auth.actions";

interface Props {}

const App: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  const dispatch = useDispatch();
  const token = localStorage.getItem(LOGIN_TOKEN_KEY);
  useEffect(() => {
    if (!token) return;
    // me().then((user) => dispatch(meFetchAction(user)));
    // meMidWare(); //Middleware me()
    dispatch(meRequestAction());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // //This following check is needed otherwise the function will move ahead with user as undefined, because me() is async.
  if (!user && token) {
    return <LoaderPulse />;
  }

  console.log("User is: " + user);
  return (
    <>
      <Suspense fallback={<LoaderPulse />}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? (
                <Redirect to="/dashboard"></Redirect>
              ) : (
                <Redirect to="/login"></Redirect>
              )}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>
            <Route
              path={[
                "/dashboard",
                "/groups",
                "/recordings",
                "/groups/:groupId",
                "/users",
                "/users/:userId",
              ]}
              exact
            >
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default React.memo(App);
