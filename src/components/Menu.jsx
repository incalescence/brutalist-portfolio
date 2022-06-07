import React from "react";
import GithubLink from "./GithubLink";
import MenuButton from "./MenuButton";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Menu = ({ setCurrentPage }) => {
  return (
    <table className="menu">
      <div className="spacer"></div>
      {/* <MenuButton
        setCurrentPage={setCurrentPage}
        page={LargeText}
        name="HOME"
      /> */}
      <MenuButton setCurrentPage={setCurrentPage} page={About} name="ABOUT" />
      <MenuButton
        setCurrentPage={setCurrentPage}
        page={Projects}
        name="PROJECTS"
      />
      <GithubLink url="https://github.com/incalescence" name="GITHUB" />
      <MenuButton
        setCurrentPage={setCurrentPage}
        page={Contact}
        name="CONTACT"
      />
    </table>
  );
};

export default Menu;
