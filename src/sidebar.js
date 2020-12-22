import React, { Component } from 'react';
import Weblink from './webLinks.js';

export default class Sidebar extends Component{
  render(){
    // let items = this.props.sidebarItems
    let items = [<Weblink address='https://github.com/baekrxnn' name='Github'/>]
    let listItems = []
    items.forEach(link => listItems.push(<li> {link} </li>))
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}