import { Component } from "react";
import './home.css'
class Home extends Component
{
render(){
    return(
        <div>
            <p> My created Component</p>
            <button className="btn btn-info">Click</button>
        </div>
    );
}
}
export default Home;