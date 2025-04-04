import React, { Component } from 'react'
import Add from './Add'
import List from './List'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
    tasks: [{ "text": "Sabzi", "status": "incomplete" },
            { "text": "Lobia", "status": "complete" },
            { "text": "House", "status": "complete" },
            { "text": "Market", "status": "incomplete" },
            { "text": "bali", "status": "incomplete" }]
    }
}
changeState(){
    this.setState({
        tasks: {}
    })
}
render() {
    return (
        <div>
            <h3>Total: {this.state.tasks.lenght}</h3>
            <Add change={this.changeState} />
            <List  tasks={this.state.tasks} />
        </div>
    )
}
}
