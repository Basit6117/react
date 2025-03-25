import { Component } from "react";
import axios from 'axios';
export default class Data extends Component
{
    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    async componentDidMount(){
        const {data} =   await   axios.get("https://api.github.com/users")
        this.setState({
            users: data
         })
    }
    

render(){
//     const fetchData = async () =>{
//  const {data} =   await   axios.get("https://api.github.com/users")

    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then(json=>{
    //     return json.json()
    // })
    // .then(data =>{
    //  this.setState({
    //     users: data
    //  })
    // }
    return(
        <div>
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">User ID</th>
      <th scope="col">Login</th>
      <th scope="col">Url</th>
    </tr>
  </thead>
  <tbody>
        {
            this.state.users.map((user) =>{
                return <tr><td>{user.id} <img className="rounded-circle" width={50} src={user.avatar_url} alt ="" /></td>
                              <td>{user.login}</td>
                              <td>{user.url}</td>
                              </tr>
            })
        }
       
  </tbody>
</table>
{/* <button onClick={fetchData}>Fetch</button> */}
        </div>
    )
}}