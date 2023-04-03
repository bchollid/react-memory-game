import {Component} from "react";

class Guess extends Component{
    render(){
        return(    
        <div className="input">
            <form>
            <label>
            Enter your guess here:
            <input type="text" name="name" value={this.props.input} />
            </label>
            <input type="submit" value="Submit" onClick={this.props.onClick}/>
            </form>
        </div>
        )
    }


}

export default Guess;