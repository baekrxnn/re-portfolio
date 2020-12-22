import React, { Component } from "react";
import "./App.css";
import Sidebar from "./sidebar.js";

// import logo from 'logo.svg';
// import { Image, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <div>
        <div classname="sidebar">
          <Sidebar />
        </div>
        
        <div>
          <h1>Karen He</h1>
        </div>
      </div>
    );
  }
}

export default App;
