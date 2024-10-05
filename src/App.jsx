import React,{Component} from "react";
import "./index.css"

export default class Tim extends Component{
    constructor(props){
        super(props)
        this.state={
             time:new Date().toLocaleTimeString()
               }  
    }

    updating=()=>{this.setState({time:new Date().toLocaleTimeString()})}

    componentDidMount(){

        this.intervel=setInterval(this.updating,1000);

    } 
    render(){ 
        return(
            <>
            <div className="clock-container">
                    <button className="clock-button" style={{color:"red"}}>{this.state.time}</button>
           </div>
            
            </>
        )
    }
}