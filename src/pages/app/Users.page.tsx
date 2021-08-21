import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appTitleChangeAction } from "../../actions/appUi.actions";

interface Props {}

const UsersPage: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appTitleChangeAction("Users"));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return <></>;
};

export default React.memo(UsersPage);
