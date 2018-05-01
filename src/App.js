import React, { Component } from "react";
import Comments from "./components/Comments/comments";
import { DATA, USERS } from "./utils/data";
import "./App.css";

class App extends Component {
  

  onUpvote = () => {
    this.setState({points: this.state.points + 1})
  }

  onDownvote = () => {
    this.setState({points: this.state.points - 1})
  }
  
  render() {
    return (
      <div className="App">
        <h1>🔥 Flame Wars 🔥</h1>
        <Comments 
          data={DATA}
          users={USERS}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
        />
      </div>
    );
  }
}

export default App;
