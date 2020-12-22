import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar.js';
import Weblink from './webLinks.js'
// import logo from 'logo.svg';
// import { Image, StyleSheet, Text, View } from 'react-native';


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <h1>Karen He</h1>
        <Weblink address='https://github.com/baekrxnn' name='Github'/>
      </div>
    )
  }
}


export default App;