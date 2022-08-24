import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import {AiOutlineGithub} from "react-icons/ai";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img alt="project preview" src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a target="_blank" rel="noreferrer" href={project.link}>
          <AiOutlineGithub />
      </a>
      
    </div>
  );
}

export default ProjectDisplay;