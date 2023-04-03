import {Component} from "react";

class Prompt extends Component{
    render(){
        return(    
        <div id="prompt" style={{display: "none"}} className="prompt">
            <h1>{this.props.prompt}</h1>
        </div>
        )
    }


}

export default Prompt;