import axios from "axios";
import React, { Component } from "react";
export default class Forms extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            keyword: "",
            results: []
        }
    }
   async handleSubmit(e){
        e.preventDefault()
const term = this.state.keyword
const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE&query=${term}`)
this.setState({
    results: data.results
})   
}
    handleChange(e){
        // console.log('change');
        this.setState({
            keyword: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    name="username"
                    onChange={this.handleChange}
                    id="1"
                    value={this.state.keyword} />
                    <button>Click</button>
                </form>
                   <div>
                {
                    this.state.results.map(image=>{
                        return <img src ={image.urls.small} alt="images" />                    })
                }
                  </div>          
                 </div>
        )
    }
}