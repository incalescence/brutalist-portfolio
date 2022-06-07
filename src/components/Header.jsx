import React from "react";

const Header = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <header onClick={refreshPage}>
      <marquee behavior="" direction="" scrollamount="5">
        WANNING ⟡ CAI ♥ WANNING ⟡ CAI ♥ WANNING ⟡ CAI ♥ WANNING ⟡ CAI
      </marquee>
      <hr />
    </header>
  );
};

export default Header;
