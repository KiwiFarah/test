import React, {Component} from 'react';
import Highscore from './HighScore';


class Application extends Component{
  constructor(props){
    super(props);

    this.state = {
      count:0,
      highscore: false
    }
  }

  componentDidUpdate(props, state){
    console.log("component updated from ",state, " to ",this.state )
    if (this.state.count > 10 && this.state.count !== state.count && !this.state.highscore){
      console.log("Updating state");
      this.setState({highscore: true})

    }
  }

  handClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render(){
    return(
      <div>
       <h1>You clicked the button {this.state.count} times</h1> 
      <Highscore
      highscore={this.state.highscore}/>
        <span>
          <button onClick={() => this.handClick()}>Click me</button>
        </span>

      </div>
    )

  }
  }

  export default Application;
