import React, { Component } from "react";
import projectsData from "./projects.json";
import Weblink from "./webLinks.js";

const weblinks = () => {
  let currentProjects = projectsData.Projects;
  currentProjects.forEach(x => {
    return <Weblink address={x.link} name={x.name} />
  });
};

const projects = () => {
  // console.log(projectsData.Projects);
  links = projectsData.Projects.forEach

  return (
    <div>
      <p>{projectsData.Year}</p>
      {weblinks()}
    </div>
  );
};

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h3> Projects </h3>
        <p> in the making OvO,,, </p>
        {projects()}
      </div>
    );
  }
}
