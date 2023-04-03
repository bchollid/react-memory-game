import {Component} from "react";

class Cards extends Component{
    render(){
        return(    
        <div id={this.props.id} style={{display: "none"}} className="card">
            <h1>{this.props.id}</h1>
        </div>
        )
    }


}

export default Cards;