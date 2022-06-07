import React from "react";

const GithubLink = ({ name, url }) => {
  return (
    <tr className="menubox">
      <a href={url} target="_blank" className="menuoption">
        {name}
      </a>
    </tr>
  );
};

export default GithubLink;
