import React, { useState } from "react";
import Menu from "./Menu";
import LargeText from "./LargeText";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(LargeText);

  return (
    <div className="Main">
      <Menu setCurrentPage={setCurrentPage} />
      {currentPage}
    </div>
  );
};

export default Main;
