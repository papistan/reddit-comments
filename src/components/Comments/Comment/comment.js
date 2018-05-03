import React, { Component } from "react";
import Comments from "../comments";
import { USERS } from "../../../utils/data";
import { timeConversion } from "../../../utils/helpers";

import "./comment.css";

const Comment = props => {
  let { id, points, createdAt, user, text, comments } = props.comment;
  let data = [props.data, comments];
  let userObject = props.users.filter(person => person.id === user);
  let timeDifferenceInMilliseconds = Date.now() - new Date(createdAt);

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
        <p className="username">{userObject[0].username}</p>
        <p className="points"> {points} points </p>
        <p className="time">
          {" "}
          {timeConversion(timeDifferenceInMilliseconds)} ago
        </p>
        <p className="commment-text">{text}</p>
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
