import React, { Component } from "react";
import "./App.css";
import "./sidebar.css";
import Sidebar from "./sidebar.js";

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
          <h1>Karen He</h1>
        </div>
      </div>
    );
  }
}

export default App;
