import React from "react";

interface Props {}

const NotFoundPage: React.FC<Props> = (props) => {
  return (
    <>
      <p className="p-4">Page not found. Check the URL!</p>
    </>
  );
};

export default React.memo(NotFoundPage);
