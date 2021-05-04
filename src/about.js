import React, { Component } from "react";
import "./about.css";

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
      <div>
        <h1 className="name"> Karen He</h1>

        <div className="bio">
          <ul>
            <li> First year Computer Science student at University of California Irvine </li>
            <li> Previous software engineer intern at LaunchDarkly (June - September, 2020) </li>
            <li> Google Computer Science Summer Institute participant (July, 2020) </li>
          </ul>
        </div>

        <div className="languages">
          <h3> --- Coding languages and libraries --- </h3>
          <ul>{codeItems}</ul>
        </div>
      </div>
    );
  }
}
