import React from "react";

const MenuButton = ({ name, setCurrentPage, page }) => {
  const handleClick = () => {
    setCurrentPage(page);
  };
  return (
    <tr className="menubox">
      <div onClick={handleClick} className="menuoption">
        {name}
      </div>
    </tr>
  );
};

export default MenuButton;
