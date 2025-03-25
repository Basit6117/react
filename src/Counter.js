import {Component, useCallback} from 'react';
import './index.css'
export default class Counter extends Component
{
    constructor(){
        super()
        this.state = {
            count:6
        }
    }
    render(){
        const handle = ()=>{
            // console.log('clicked');
        this.setState({
          count:  this.state.count + 1
        })
        }
        const minus = () =>{
            this.setState({
                count: this.state.count - 1
        })
        }
        const reset = () =>{
            this.setState({
                count: 0
            })
        }
        return(
            <div className='counter d-inline-flex'>
                <div className='cont'>
            <h1 className='d-inline-flex'>Count {this.state.count}</h1>
            </div>
            <div className='child align-items-center'>
            <button className='btn btn-primary' onClick={handle}>Click</button>
            <button className='btn  btn-primary' onClick={minus}>Remove</button>
            <button className='btn  btn-danger' onClick={reset}>Reset</button>
            </div></div>
        )
    }
}