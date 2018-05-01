import React, { Component } from "react";

import "./comment.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: props.comment.votes,
      createdAt: props.comment.createdAt,
      text: props.comment.text,
      user: props.comment.user,
      comments: props.comment.comments
    };

    this.onUpvote = props.onUpvote.bind(this);
    this.onDownvote = props.onDownvote.bind(this);
  }

  render() {
    return (
      <div className="Comment">
        <h5> THIS IS a Comment </h5>
        <button className="upVote" onClick={this.onUpvote}>
          ^
        </button>
        <button className="downVote" onClick={this.onDownvote}>
          V
        </button>
      </div>
    );
  }
}

export default Comment;
