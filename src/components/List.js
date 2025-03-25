import { Component } from "react";
export default class List extends Component
{
    constructor(){
        super()
    }
    
    render(){
        this.state = {
        marks: [67,88,44,33,89,23,45,67,88,30]
        }
        return(
            <div>
                <ul>
                  {this.state.marks.map((mark,index)=> {
                 return  <li key = {index} >{mark}</li> 
                  }
                )}
                </ul>
            </div>
        )
    }
}