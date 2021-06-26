import React, { Component } from 'react';

export default class Weblink extends Component{
  render() {
    let {address, name, description, samePage} = this.props;
    // description and samePage is optional.
    // samePage will determine if the weblink will open on the same page
    return <a href={address} target={samePage ? '_self' :'_blank'}> {name} <p>{description}</p> </a>
  }
}
