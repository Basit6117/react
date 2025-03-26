import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super()
this.handleSubmit = this.handleSubmit.bind(this)
this.handleChange = this.handleChange.bind(this)
this.state = {
    item : "",
    list: []
}
    }
    handleSubmit(e){
e.preventDefault();
if(this.state.item === ""){
    alert('Empty is Not Alowed')
}
else if(this.state.list.indexOf(this.state.item) < 0){
    this.setState({
        list:this.state.list.concat(this.state.item)
    })
}
else {
    alert('Item already in the list')
}
    }
    handleChange(e){
this.setState({
    item: e.target.value
})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    value={this.state.item}
                    onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <div>
                <ul>
                    { 
                        this.state.list.map(l =>{
                            return <li>{l}</li>
                        } )
                    }
                    </ul>
                    <button onClick={ () => this.setState({list: []})}>Reset</button>
                </div>
            </div>
        )
    }
}
