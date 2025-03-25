import { Component } from "react";
export default class Detail extends Component
{
    constructor(props){
        super(props)
    }
    render()
    {
        const t = 900; 
        return(
            <div>
            {/* {t > 10 ? <p>{this.props.para}</p> : <p></p>} */}
           { t === 900 && <p>{this.props.para}</p>}
                {/* <p>{this.props.para}</p> */}
            </div>
        )
    }
}