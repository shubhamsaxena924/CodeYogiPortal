import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appTitleChangeAction } from "../../actions/appUi.actions";

interface Props {}

const RecordingsPage: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appTitleChangeAction("Recordings"));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="p-4">Recordings</div>
    </>
  );
};

export default React.memo(RecordingsPage);
