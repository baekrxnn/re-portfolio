import React, { Component } from "react";
import projectsData from "./projects.json";
import Weblink from "./webLinks.js";

const crawlProjects = projsArr => {
  let links = [];
  console.log(projsArr)
  projsArr.forEach(x =>
    links.push(
      <Weblink
        address={x.link}
        name={x.name}
        key={x.name}
        className="project-link"
      />
    )
  );
  return links;
};

const projects = () => {
  // console.log(projectsData.contents);
  projectsData.contents.forEach(x => {
    return (
      <div>
        <p>{x.Year}</p>
        {crawlProjects(x.Projects)}
      </div>
    );
    // console.log(x.Projects);
  });
  // let links = [];
  // projectsData.Projects.forEach(x => links.push(<Weblink address={x.link} name={x.name} key={x.name} className="project-link"/>));
  let li = projects();

  return (
    <div>
      <p>{projectsData.Year}</p>
      <div className="section">{li}</div>
    </div>
  );
};

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h3> --- Projects --- </h3>
        {/*<p> in the making OvO,,, </p>*/}
        <div>{projects()}</div>
      </div>
    );
  }
}
