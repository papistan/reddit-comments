import React, { Component } from "react";
import Comments from "./components/Comments/comments";
import { DATA, USERS } from "./utils/data";
import "./App.css";

class App extends Component {
  onUpvote = () => {
    this.setState({ points: this.state.points + 1 });
  };

  onDownvote = () => {
    this.setState({ points: this.state.points - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>
          <span role="img" aria-label="flame">
            🔥
          </span>{" "}
          Flame Wars{" "}
          <span role="img" aria-label="flame">
            🔥
          </span>
        </h1>
        <Comments
          data={DATA}
          users={USERS}
          onUpvote={this.onUpvote}
          onDownvote={this.onDownvote}
        />
      </div>
    );
  }
}

export default App;
