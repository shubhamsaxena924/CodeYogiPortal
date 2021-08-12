import React from "react";

interface Props {}

const RecordingsPage: React.FC<Props> = (props) => {
  return (
    <>
      <div className="h-screen p-4 ml-20">Recordings</div>
    </>
  );
};

export default React.memo(RecordingsPage);
