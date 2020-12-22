import React, { Component } from 'react';

export default class Weblink extends Component{
  render() {
    let address = this.props.address
    let name = this.props.name
    return <a href={address} target='_blank'> {name} </a>
  }
}
