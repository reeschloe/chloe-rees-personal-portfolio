import React from "react";
import { useHistory } from "react-router-dom";

function ProjectItem({ image, name, id}) {
  const history = useHistory();
  return (
    <div
      className="projectItem"
      onClick={() => {
        history.push("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;