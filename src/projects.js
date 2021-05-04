import React, { Component } from "react";
import projectsData from "./projects.json";
import Weblink from "./webLinks.js";

// const weblinks = () => {
//   let currentProjects = projectsData.Projects;
//   currentProjects.forEach(x => {
//     return <Weblink address={x.link} name={x.name} /> 
//   });
// };

const projects = () => {
  // console.log(projectsData.Projects);
  projectsData.Projects.forEach(x => console.log(x.name));
  let links = [];
  projectsData.Projects.forEach(x => links.push(<Weblink address={x.link} name={x.name} key={x.name}/>));
  // let one = projectsData.Projects[0];
  // let rOne = (<Weblink address={one.link} name={one.name} />);

  return (
    <div>
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
