import React, { Component } from "react";
import Comments from "./components/Comments/comments";
import { DATA, USERS } from "./utils/data";
import { dataNormalizer, topNodes } from "./utils/helpers";
import "./App.css";

class App extends Component {
  state = {
    data: [dataNormalizer(DATA), topNodes(DATA)],
    users: USERS
  };

  onUpvote = id => {
    this.setState(state => ({
      data: [
        {
          ...state.data[0],
          ...(state.data[0][id].points = state.data[0][id].points + 1)
        },
        state.data[1]
      ]
    }));
  };

  onDownvote = id => {
    this.setState(state => ({
      data: [
        {
          ...state.data[0],
          ...(state.data[0][id].points = state.data[0][id].points - 1)
        },
        state.data[1]
      ]
    }));
  };

  render() {
    let { data, users } = this.state;
    return (
      <div>
        <h1 className="title">Reddit-like Comments</h1>
        <Comments
          data={data}
          users={users}
          onUpvote={this.onUpvote}
          onDownvote={this.onDownvote}
        />
      </div>
    );
  }
}

export default App;
