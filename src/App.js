import React, { Component } from "react";
import Comments from "./components/Comments/comments";
import { DATA, USERS } from "./utils/data";
import "./App.css";

const dataNormalizer = (data, object = {}) => {
  let newData = object;

  for (let i = 0; i < data.length; i++) {
    let comment = data[i];
    newData[comment.id] = {
      id: comment.id,
      points: comment.points,
      createdAt: comment.createdAt,
      text: comment.text,
      user: comment.user,
      comments: []
    };
    if (comment.comments.length > 0) {
      let childComments = comment.comments;

      for (let z = 0; z < childComments.length; z++) {
        newData[comment.id].comments.push(parseInt(childComments[z].id));
      }
      newData = dataNormalizer(comment.comments, newData);
    }
  }
  return newData;
};

const topNodes = data => {
  let topNodes = [];
  data.forEach(node => {
    topNodes.push(node.id);
  });
  return topNodes;
};

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
      <div className="App">
        <h1>Reddit-like Comments</h1>
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
