import React, { Component } from "react";

import "./comment.css";

class Comment extends Component {
    constructor() {
        super();
    
        this.state = {
          points: props.comments.votes,

        };
    
        this.onUpvote = props.onUpvote.bind(this);
        this.onDownvote = props.onDownvote.bind(this);
      }
  
    render() {
    return (
      <div className="Comment">
        <h5> THIS IS a Comment </h5>
        <button className="upVote" onClick={this.onUpvote}>^</button>
        <button className="downVote" onClick={this.onDownvote}>V</button>
      </div>
    );
  }
}

export default Comment;
