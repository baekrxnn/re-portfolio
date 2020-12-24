import React, { Component } from "react";
import "./App.css";
import "./sidebar.css";
import Sidebar from "./sidebar.js";
import AboutMe from "./about.js";

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
        </div>
      </div>
    );
  }
}

export default App;
