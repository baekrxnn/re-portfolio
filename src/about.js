import React, { Component } from "react";
import "./style/about.css";

export default class about extends Component {
  render() {
    let codingTechs = [
      // because I expect this list to grow
      "CSS",
      "HTML",
      "Java",
      "JavaScript (React, jQuery)",
      "Python"
    ];

    let codeItems = [];
    for (let i = 0; i < codingTechs.length; i++) {
      codeItems.push(<li key={i}> {codingTechs[i]} </li>);
    }

    return (
      <div className="AboutMeSection">
        <h1 className="name"> Karen He</h1>

        <div className="bio">
          <ul>
            <li> Second year Computer Science student at University of California Irvine </li>
            <li> Code Nation Alumni, and member of the Code Nation Alumni Council (2021)</li>
            <li> Previous software engineer intern at LaunchDarkly (June - September, 2020) </li>
          </ul>
        </div>

        <div className="languages">
          <h2> Coding languages and libraries</h2>
          <ul>{codeItems}</ul>
        </div>
      </div>
    );
  }
}
