import React, { Component } from "react";
import Comment from "./Comment/comment";
import { DATA, USERS } from "../../utils/data";

import "./comments.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      comments: DATA
    };
  }

  renderComments() {
    let { comments } = this.state;

    comments.map(({ id, points, createdAt, text, user, comments }) => {
      return <Comment />;
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
