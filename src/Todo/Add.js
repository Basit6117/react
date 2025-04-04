import React, { Component } from 'react'

export default class Add extends Component {
  constructor(){
    super()
    this.state ={
      tasksText: ""
    }
  }
handleChange = (e) =>{
  this.setState({

   tasksText: e.target.value
  })
}
handleSubmit = (e)=>{
  this.setState({
    // this.props.change(e)
  })

}
  render() {
    return (
      <div>
        <form>
          <input type='text'
                 id='item'
                 onSubmit={this.handleSubmit}
                 onChange={this.handleChange}
                 value={this.state.tasksText}
                 />
                 <button>Add</button>
        </form>
      </div>
    )
  }
}
