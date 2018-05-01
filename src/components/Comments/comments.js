import React, { Component } from "react";
import Comment from "./Comment/comment";


import "./comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.USERS,
      comments: props.DATA
    };

    this.onUpvote = props.onUpvote.bind(this);
    this.onDownvote = props.onDownvote.bind(this);
  }

  renderComments() {
    let { comments } = this.state;

    comments.map(({ id, points, createdAt, text, user, comments }) => {
      return (
        <Comment 
            data={comments}
            onUpvote={this.onUpvote}
            onDownvote={this.onDownvote}
        />)
      ;
    });
  }

  render() {
    return (
      <div className="Comments">
        <h5> Comments </h5>

        {this.renderComments()}
      </div>
    );
  }
}

export default Comments;
