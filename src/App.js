import React, { Component } from "react";
import "./style/App.css";
import "./style/sidebar.css";
import "./style/projects.css";
import Sidebar from "./sidebar.js";
import AboutMe from "./about.js";
import Projects from "./projects.js";

// import logo from 'logo.svg';
// import { Image, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="contents">
          <AboutMe />
          <Projects className="projects" />
        </div>
      </div>
    );
  }
}

export default App;
