import React , {Component} from 'React'

export default class Header extends Component{
  constructor(props){
    super(props)
  }
  // const address = this.props
  // let address = this.props.address
  
  render() {
    return <a href={this.props.address} target='_blank' />
  }
}
