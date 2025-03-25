import { keyboard } from '@testing-library/user-event/dist/keyboard'
import axios from 'axios'
import React, { Component } from 'react'

export default class News extends Component {
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
        e.preventDefault();
        const term = this.state.keyword
        const {data} = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_762600bff0b96198da55884539306fde5a45d&q=${term}`)
        // console.log(data.results);
        this.setState({
            results: data.results
        })
        }
        handleChange(e){
            this.setState({
                keyword: e.target.value
            })
        }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}
        onChange={this.handleChange}>
<div class="mb-3">
    <label for="" className="form-label fw-bold fs-1">Enter Country or City name for <span className='text-danger'>NEWS</span></label>
    <input type="text" className="form-control"   value={this.state.keyword} />
  </div>
  <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <div>
          {this.state.results.map(article =>{
  <button type="submit" className="btn btn-primary">Search</button>
  return <div><mark className='fs-1'>{article.title}</mark>
            <p>{article.description}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
}
