import React from "react";
import { Route, useHistory } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import GroupsPage from "./Groups.page";
import { useState } from "react";
import TopNav from "../components/topNav/TopNav";
import SideNav from "../components/sideNav/SideNav";

interface Props {}

const AppContainerPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const [isScrolling, setIsScrolling] = useState(true);
  const [title, setTitle] = useState(history.location.pathname.split("/")[1]);
  console.log(isScrolling);
  return (
    <>
      {/* side nav */}
      <SideNav setTitle={setTitle} />
      {/* top bar */}
      <TopNav title={title} isScrolling={isScrolling} />
      {/* main body */}
      <div className="bg-app-light-gray">
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/groups">
          <GroupsPage />
        </Route>
        <Route path="/recordings">
          <GroupsPage />
        </Route>
      </div>
    </>
  );
};

export default React.memo(AppContainerPage);
