import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appTitleChangeAction } from "../../actions/appUi.actions";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const DashboardPage: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appTitleChangeAction("Dashboard"));
  }, []); //eslint-disable-line
  return (
    <>
      <div className="p-4">
        Dashboard
        <p>User first_name: {user!.first_name}</p>
      </div>
    </>
  );
};

export default React.memo(DashboardPage);
