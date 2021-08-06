import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/login" exact></Redirect>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage></AuthPage>
          </Route>
          <Route path="/dashboard">
            <AppContainerPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default React.memo(App);
