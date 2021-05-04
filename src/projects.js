import React, { Component } from "react";
import projectsData from "./projects.json";
import Weblink from "./webLinks.js";


const projects = () => {
  // console.log(projectsData.Projects);
  // projectsData.Projects.forEach(x => console.log(x.name));
  let links = [];
  projectsData.Projects.forEach(x => links.push(<Weblink address={x.link} name={x.name} key={x.name} className="project-link"/>));


  return (
    <div className="section">
      <p>{projectsData.Year}</p>
      {links}
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
