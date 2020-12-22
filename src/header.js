import React, { Component } from 'react';
import Weblinks from './webLinks.js'

export default class Header extends Component{
  // given a list of webaddresses, make them spaced well across a header
  // webaddresses should be <webLinks />
  constructor() {
    super();
  }
  
  render() {
    let list = this.props
    let websites = []
    list.forEach((site) => websites.append(site))
    
    // return a header with all the links appended
  }

  
}