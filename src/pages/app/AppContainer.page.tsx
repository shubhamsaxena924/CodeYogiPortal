import React from "react";
import { Route } from "react-router-dom";
// import DashboardPage from "./Dashboard.page";
// import GroupsPage from "./Groups.page";
// import RecordingsPage from "./Recordings.page";
import DashboardLazy from "./Dashboard.lazy";
import GroupsLazy from "./Groups.lazy";
import RecordingsLazy from "./Recordings.lazy";
import TopNav from "../../components/topNav/TopNav";
import SideNav from "../../components/sideNav/SideNav";
import GroupDetailsLazy from "./GroupDetails.lazy";
import UsersLazy from "./Users.lazy";
import UserDetailsLazy from "./UserDetails.lazy";

interface Props {}

const AppContainerPage: React.FC<Props> = (props) => {
  // const [title, setTitle] = useState(history.location.pathname.split("/")[1]); //Not needed with redux
  return (
    <div className="min-h-screen bg-app-light-gray">
      {/* side nav */}
      <SideNav />
      {/* top bar */}
      <TopNav isScrolling={true} />
      {/* main body */}
      <div className="ml-16">
        <Route path="/dashboard">
          <DashboardLazy />
        </Route>
        <Route path="/groups" exact>
          <GroupsLazy />
        </Route>
        <Route path="/recordings" exact>
          <RecordingsLazy />
        </Route>
        <Route path="/groups/:groupId">
          <GroupDetailsLazy />
        </Route>
        <Route path="/users" exact>
          <UsersLazy />
        </Route>
        <Route path="/users/:userId">
          <UserDetailsLazy />
        </Route>
      </div>
    </div>
  );
};

export default React.memo(AppContainerPage);
