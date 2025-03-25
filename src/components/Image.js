import {Component} from "react";
export default class Image extends Component
{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
  <img className="card-img-top" src={this.props.url} alt="Card image cap" />
                
            </div>
        )
    }
}
