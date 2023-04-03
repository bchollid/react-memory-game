import {Component} from "react";

class Start extends Component{
    render(){
        return(    
        <div id="start-button" className="prompt">
            <button onClick={this.props.onClick}>Start!</button>
        </div>
        )
    }


}

export default Start;