import React, { Component } from "react";
import Comments from "../comments";
import { USERS } from "../../../utils/data";

import "./comment.css";

const Comment = props => {
  let { id, points, user, createdAt, text, comments } = props.comment;
  let data = [props.data, comments];

  return (
    <div className="comment">
      <div className="comment-details">
        <button
          className="upVote"
          onClick={() => {
            props.onUpvote(id);
          }}
        >
          ^
        </button>
        <button
          className="downVote"
          onClick={() => {
            props.onDownvote(id);
          }}
        >
          V
        </button>
        <p>
          {points} votes for comment id {id}
        </p>
        <p className="commment-text">{text}</p>
        <p>
          Created at {createdAt} by user {user}
        </p>
      </div>
      <div className="child-comments">
        <Comments
          data={data}
          users={USERS}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
        />
      </div>
    </div>
  );
};

export default Comment;
