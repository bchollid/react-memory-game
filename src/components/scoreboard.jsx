import {Component} from "react";

class Scoreboard extends Component{
    render(){
        return(    
        <div id="scoreboard" className="prompt">
            <h1>Win/Loss Record: {this.props.wins} - {this.props.losses}</h1>
        </div>
        )
    }


}

export default Scoreboard;