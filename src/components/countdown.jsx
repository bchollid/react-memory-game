import {Component} from "react";

class Countdown extends Component{
    render(){
        return(    
        <div id="countdown" className="prompt">
            <h1>{this.props.countdown}</h1>
        </div>
        )
    }


}

export default Countdown;