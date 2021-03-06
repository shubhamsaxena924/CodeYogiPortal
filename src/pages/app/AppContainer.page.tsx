import React from "react";
import { Route, useHistory } from "react-router-dom";
// import DashboardPage from "./Dashboard.page";
// import GroupsPage from "./Groups.page";
// import RecordingsPage from "./Recordings.page";
import DashboardLazy from "./Dashboard.lazy";
import GroupsLazy from "./Groups.lazy";
import RecordingsLazy from "./Recordings.lazy";
import { useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import SideNav from "../../components/sideNav/SideNav";

interface Props {}

const AppContainerPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState(history.location.pathname.split("/")[1]);
  return (
    <div className="min-h-screen bg-app-light-gray">
      {/* side nav */}
      <SideNav setTitle={setTitle} />
      {/* top bar */}
      <TopNav title={title} isScrolling={true} />
      {/* main body */}
      <div>
        <Route path="/dashboard">
          <DashboardLazy />
        </Route>
        <Route path="/groups">
          <GroupsLazy />
        </Route>
        <Route path="/recordings">
          <RecordingsLazy />
        </Route>
      </div>
    </div>
  );
};

export default React.memo(AppContainerPage);
