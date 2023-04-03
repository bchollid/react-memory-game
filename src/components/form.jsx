import {Component} from "react";

class Form extends Component{
    render(){
        return(    
            <form id="form" style={{display: "none"}}onSubmit={this.props.onSubmit} >
            <input type="number" value={this.props.inputValue} onChange={this.props.onChange} />
            <button type="submit">Submit Answer</button>
            </form>
        )
    }


}

export default Form;