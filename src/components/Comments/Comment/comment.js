import React, { Component } from "react";
import Comments from "../comments";
import { USERS } from "../../../utils/data";

import "./comment.css";

class Comment extends Component {
  render() {
    let { points, user, createdAt, text } = this.props.comment;
    return (
      <div className="comment">
        <div className="comment-details">
          <button className="upVote" onClick={this.onUpvote}>
            ^
          </button>
          <button className="downVote" onClick={this.onDownvote}>
            V
          </button>
          <p>{points} votes</p>
          <p className="commment-text">{text}</p>
          <p>
            Created at {createdAt} by user {user}
          </p>
        </div>
        <div className="child-comments">
          <Comments
            data={this.props.comment.comments}
            users={USERS}
            onUpvote={this.onUpvote}
            onDownvote={this.onDownvote}
          />
        </div>
      </div>
    );
  }
}

export default Comment;
