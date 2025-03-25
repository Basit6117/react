import { Component } from "react";
export default class ShowHide extends Component
{
    constructor(){
        super()
        this.state ={
            label: "hide",
            status: true
        }
    }
    render(){
       
        const change = () =>{
            this.setState({
            label: "show",
            status: !this.state.status
            })
        }
        return(
            <div>
          {this.state.status && <h1>SOme text here when click hide it will hide and when click show it will be visisble again </h1>}
            <button onClick={change}>{this.state.label}</button>
            </div>
        )
    }
}