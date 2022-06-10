import React from "react";
import Project from "./Project";
import todo from "./images/todo.PNG";
import index from "./images/index.png";

const Projects = () => {
  return (
    <div className="projects">
      <Project projectname="React Task Tracker" image={todo} />
      <Project projectname="Portfolio Page" image={index} />
      <Project projectname="Vanilla JS To-Do App" image={index} />
      <Project projectname="Project Name" image={index} />
      <Project projectname="Project Name" image={index} />
    </div>
  );
};

export default Projects;
