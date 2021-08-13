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
import { User } from "../../models/User";

interface Props {
  user: User;
}

const AppContainerPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState(history.location.pathname.split("/")[1]);
  return (
    <>
      {/* side nav */}
      <SideNav setTitle={setTitle} />
      {/* top bar */}
      <TopNav title={title} isScrolling={true} />
      {/* main body */}
      <div className="bg-app-light-gray">
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
    </>
  );
};

export default React.memo(AppContainerPage);
