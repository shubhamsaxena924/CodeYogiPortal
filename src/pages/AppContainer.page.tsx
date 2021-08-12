import React from "react";
import { Route, useHistory } from "react-router-dom";
// import DashboardPage from "./Dashboard.page";
// import GroupsPage from "./Groups.page";
// import RecordingsPage from "./Recordings.page";
import { useState } from "react";
import TopNav from "../components/topNav/TopNav";
import SideNav from "../components/sideNav/SideNav";

const DashboardPage = React.lazy(() => import("./Dashboard.page"));
const GroupsPage = React.lazy(() => import("./Groups.page"));
const RecordingsPage = React.lazy(() => import("./Recordings.page"));

interface Props {}

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
          <DashboardPage />
        </Route>
        <Route path="/groups">
          <GroupsPage />
        </Route>
        <Route path="/recordings">
          <RecordingsPage />
        </Route>
      </div>
    </>
  );
};

export default React.memo(AppContainerPage);
