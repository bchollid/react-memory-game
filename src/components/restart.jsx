import {Component} from "react";

class Restart extends Component{
    render(){
        return(    
        <div style={{display: "none"}} id="restart" className="prompt">
            <button  onClick={this.props.onClick}>Restart</button>
        </div>
        )
    }


}

export default Restart;