import { Component } from "react";
export default class Fetch extends Component
{
    constructor(){
        super()
        this.state ={
            list: []
        }
            }

            render(){
                const fetchData = () =>{
                fetch("https://api.github.com/users")
                    .then(json=>{
                        return json.json()
                })
                    .then(data=>{
                        // console.log(data);
                        this.setState({
                            list: data
                        })
                    })
                }
                return(
                    <div>
<ul>
    {this.state.list.map((m)=>{
    return <li>{m.url} - <img src={m.avatar_url} alt = "" /></li>
    }
    )}
</ul>
 <button onClick={fetchData}>Fetch</button>
 </div>
                )
            }
}