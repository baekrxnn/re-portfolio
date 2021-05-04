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
        <p className="year">{x.Year}</p>
        <div className="section">{crawlProjects(x.Projects)}</div>
        
      </div>
    );
    // console.log(x.Projects);
  });
  // let links = [];
  // projectsData.Projects.forEach(x => links.push(<Weblink address={x.link} name={x.name} key={x.name} className="project-link"/>));

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
        <h3> --- Projects --- </h3>
        {/*<p> in the making OvO,,, </p>*/}
        <div>{projects()}</div>
      </div>
    );
  }
}
