import React from "react";
import { useContext } from "react";
import AppContext from "../../App.context";

interface Props {}

const DashboardPage: React.FC<Props> = (props) => {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className="p-4 ml-20">
        Dashboard
        <p>User first_name: {user!.first_name}</p>
      </div>
    </>
  );
};

export default React.memo(DashboardPage);
