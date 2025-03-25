import react, { Component } from "react";
export default class Random extends Component{
constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
        num: 0
    }
}
handleClick(){
// console.log('clicked');
const randNum = Math.floor(Math.random() * 100)
this.setState({
    num: randNum
})
}
componentDidUpdate(){
    // console.log('updated');
    
}
render(){

    return(

        <div>
            <h1>{this.state.num}</h1>
            <button onClick={this.handleClick}>Click</button>
        </div>
    )
}
}