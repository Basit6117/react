import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.props.tasks.map(m =>{
                    return <Item text={m.text} status={m.status} />
                })
            }
        </ul>
      </div>
    )
  }
}
