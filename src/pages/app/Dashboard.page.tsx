import React from "react";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const DashboardPage: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
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
