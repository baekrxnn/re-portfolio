import React, { Component } from 'react';
import projectsData from "./projects.json";


const projects = () => {
  return (
    <p>{projectsData.year}</p>
  )
}

export default class Projects extends Component {
  render() {
    return(
      <div>
        <h3> Projects </h3>
        <p> in the making OvO,,, </p>
        <p>{projects()}</p>
      </div>
    )
  }
  
}

