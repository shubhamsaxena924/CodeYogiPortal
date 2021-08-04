import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth.page";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage></AuthPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default React.memo(App);
