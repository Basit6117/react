import React, { Component } from "react";
export default class Events extends Component{
constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
}
handleClick(e){
    // console.log(e);
     if(e.target.id === "1"){
         console.log('button one clicked');
     }
     else if(e.target.id === "2"){
         console.log('btn 2 clicked');
     }
}
render(){
    return(
        <div>
            <button id="1" onClick={(e)=>this.handleClick(e)}>Click 1</button>
            <button id="2" onClick={(e)=>this.handleClick(e)}>Click 2</button>
        </div>
    )
}
}