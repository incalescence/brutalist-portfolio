import React from "react";

const Project = ({ projectname, image }) => {
  return (
    <div className="project">
      <p>{projectname}</p>
      <img className="projectimage" src={image}></img>
    </div>
  );
};

export default Project;
