import React, { Component } from "react";
import projectsData from "./projects.json";
import Weblink from "./webLinks.js";

const crawlProjects = projsArr => {
  let links = [];
  // console.log(projsArr)
  projsArr.forEach(x =>
    links.push(
      <Weblink
        address={x.link}
        name={x.name}
        key={x.name}
        className="project-link"
        description={x.description}
      />
    )
  );
  return links;
};

const projects = () => {
  // console.log(projectsData.contents);
  let li = [];
  projectsData.contents.forEach(x => {
    li.push (
      <div>
        <h3 className="year">{x.Year}</h3>
        <div className="section">{crawlProjects(x.Projects)}</div>
        
      </div>
    );
    // console.log(x.Projects);
  });

  return (
    <div>
      <div>{li}</div>
    </div>
  );
};

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2 id="ProjectsSection"> Projects </h2>
        <div>{projects()}</div>
      </div>
    );
  }
}
