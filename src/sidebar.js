import React, { Component } from 'react';
import Weblink from './webLinks.js';

export default class Sidebar extends Component{
  render() {
    // let items = this.props.sidebarItems
    let items = [
      <Weblink address='#ProjectsSection' name="Projects" samePage /> ,
      <Weblink address='https://github.com/baekrxnn' name='Github' /> ,
      <Weblink address='https://www.linkedin.com/in/karen18he/' name='LinkedIn' /> ,
    ]
    let listItems = []
    items.forEach(link => listItems.push(<li className="sidebar-link"> {link} </li>))
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}