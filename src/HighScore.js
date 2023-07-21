import React, { Component } from "react";
import Application from "./App";

class Highscore extends Component {
  render() {
    if (this.props.highscore) {
      return (
        <div>
          <h1>Beat highscore! </h1>
          <button onClick={ this.props.reset}>reset</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Highscore;
