import { render } from "@testing-library/react";
import { Component } from "react";
import Image from "./Image";
import Detail from "./Detail";
export default class Cards extends Component
{
    constructor(props){
        super(props);
    }
    render (){
        return(
    <div className="card"style={{ width: "18rem" }}>
<Image 
 url ="https://randomuser.me/api/portraits/men/20.jpg"
/>
<Detail 
 para = "lorem text"
/>
  {/* <img className="card-img-top" src={this.props.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
  </div>
  <div className="card-body">
    <a href="#" className="card-link">{this.props.link}</a>
  </div> */}
</div>
        );
}
}