import React, { Component } from "react";
import Comment from "./Comment/comment";

import "./comments.css";

class Comments extends Component {
  renderComments() {
    let { users } = this.props;
    let comments = this.props.data;

    return comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          users={users}
          onUpvote={this.props.onUpvote}
          onDownvote={this.props.onDownvote}
        />
      );
    });
  }

  render() {
    return <div className="comments">{this.renderComments()}</div>;
  }
}

export default Comments;
