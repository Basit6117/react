import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <li>{this.props.text}- {this.props.status}</li>
    )
  }
}
