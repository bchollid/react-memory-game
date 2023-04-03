import './App.css';
import React, {Component} from "react";
import Cards from "./components/cards.jsx"
import Prompt from "./components/prompt.jsx"
import Start from "./components/startbutton.jsx"
import Countdown from "./components/countdown.jsx"
import Scoreboard from "./components/scoreboard.jsx"
import Form from "./components/form.jsx"
import Restart from "./components/restart.jsx"

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          idNames: ["red", "blue", "green", "yellow", "purple"],
          prompts: ["How many red tiles were there?", "How many blue tiles were there?", "How many green tiles were there?", "How many yellow tiles were there?", "How many purple tiles were there?"],
          inputValue:"",
          countdown: 5,
          wins: localStorage.getItem("wins"),
          losses: localStorage.getItem("losses"),
        }

      
      this.ids = [this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)], this.state.idNames[Math.floor(Math.random()*this.state.idNames.length)]]
      this.question = this.state.prompts[Math.floor(Math.random()*this.state.prompts.length)]
      this.startGame=this.startGame.bind(this);
      this.startCountdown=this.startCountdown.bind(this);
      this.checkAnswer=this.checkAnswer.bind(this);
      this.restartGame=this.restartGame.bind(this);
    }
    startCountdown(){
      let countdownNumber = document.getElementById("countdown")
      if(this.state.countdown > 1){
      this.setState({countdown: this.state.countdown -1})
    }
    else if(this.state.countdown === 1){
      countdownNumber.style.display = "none";
    }
    }
    startGame(){
      let cards = document.querySelectorAll(".card");
      cards.forEach(function(item){
        item.style.display = "flex";
      })
      let cardgrid = document.getElementById("cardgrid");
      let prompt = document.getElementById("prompt")
      let form = document.getElementById("form");
      let restart = document.getElementById("restart");
      let startButton = document.getElementById("start-button");
      setTimeout(function(){cardgrid.style = 'display: none'}, 5000)
      setTimeout(function(){prompt.style = 'display: block'}, 5000)
      setTimeout(function(){form.style = 'display: block'}, 5000)
      setTimeout(function(){restart.style = 'display: block'}, 5000)
      setTimeout(function(){startButton.style = 'display: none'}, 5000)
      this.countdownTimer = setInterval(this.startCountdown, 1000)
    }

    restartGame(){
      localStorage.setItem("wins", this.state.wins);
      localStorage.setItem("losses", this.state.losses);
      window.location.reload();
    }

    checkAnswer(e){
      e.preventDefault();
      let blueCounter = this.ids.filter(function(item){
        if(item === "blue"){
          return true;
        }
        else{
          return false;
        }
      });
      let redCounter = this.ids.filter(function(item){
        if(item === "red"){
          return true;
        }
        else{
          return false;
        }
      });
      let greenCounter = this.ids.filter(function(item){
        if(item === "green"){
          return true;
        }
        else{
          return false;
        }
      });
      let purpleCounter = this.ids.filter(function(item){
        if(item === "purple"){
          return true;
        }
        else{
          return false;
        }
      });
      let yellowCounter = this.ids.filter(function(item){
        if(item === "yellow"){
          return true;
        }
        else{
          return false;
        }
      });
      if(this.question==="How many blue tiles were there?" && this.state.inputValue == blueCounter.length){
        this.setState({wins: Number(this.state.wins)+1})
      }
      else if(this.question==="How many red tiles were there?" && this.state.inputValue == redCounter.length){
        this.setState({wins: Number(this.state.wins)+1})
      }
      else if(this.question==="How many purple tiles were there?" && this.state.inputValue == purpleCounter.length){
        this.setState({wins: Number(this.state.wins)+1})
      }
      else if(this.question==="How many green tiles were there?" && this.state.inputValue == greenCounter.length){
        this.setState({wins: Number(this.state.wins)+1})
      }
      else if(this.question==="How many yellow tiles were there?" && this.state.inputValue == yellowCounter.length){
        this.setState({wins: Number(this.state.wins)+1})
      }
      else{
        this.setState({losses: Number(this.state.losses)+1})
      }
      let form = document.getElementById("form");
      form.style.display="none"
    }

componentWillUnmount(){
  clearInterval(this.countdownTimer);
}

  render(){ 
  return (
    <div className="App"><h1>Test Your Memory!</h1>
    <Scoreboard wins={this.state.wins} losses={this.state.losses}/>
    <Start onClick={this.startGame}/>
    <Countdown countdown={this.state.countdown} />
      <Prompt prompt={this.question}/>
      <Form onSubmit={this.checkAnswer} inputValue={this.state.inputValue} onChange={e=>this.setState({inputValue: e.target.value})}/>
      <div id="cardgrid" className="card-grid">
        <Cards id={this.ids[0]} name={this.ids[0]} />
        <Cards id={this.ids[1]} name={this.ids[1]}/>
        <Cards id={this.ids[2]} name={this.ids[2]}/>
        <Cards id={this.ids[3]} name={this.ids[3]}/>
        <Cards id={this.ids[4]} name={this.ids[4]}/>
        <Cards id={this.ids[5]} name={this.ids[5]}/>
        <Cards id={this.ids[6]} name={this.ids[6]}/>
        <Cards id={this.ids[7]} name={this.ids[7]}/>
        <Cards id={this.ids[8]} name={this.ids[8]}/>
      </div>
      <Restart onClick={this.restartGame}/>
    </div>
  );
}
}

export default App;
