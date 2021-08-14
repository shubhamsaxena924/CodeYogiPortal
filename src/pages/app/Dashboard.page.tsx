import React from "react";
import { useAppSelector } from "../../store";

interface Props {}

const DashboardPage: React.FC<Props> = (props) => {
  const user_firstname = useAppSelector(
    (store) => store.auth.id && store.users.byId[store.auth.id!].first_name
  );
  return (
    <>
      <div className="p-4 ml-20">
        Dashboard
        <p>User first_name: {user_firstname}</p>
      </div>
    </>
  );
};

export default React.memo(DashboardPage);
