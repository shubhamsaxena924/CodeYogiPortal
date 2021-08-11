import React from "react";

interface Props {}

const DashboardPage: React.FC<Props> = (props) => {
  return (
    <>
      <div className="h-screen ml-20">Dashboard</div>
    </>
  );
};

export default React.memo(DashboardPage);
