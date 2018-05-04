import React from "react";
import Comments from "../comments";
import { USERS } from "../../../utils/data";
import { timeConversion } from "../../../utils/helpers";

import "./comment.css";

const Comment = props => {
  let { id, points, createdAt, user, text, comments } = props.comment;
  let userObject = props.users.filter(person => person.id === user);
  let timeDifferenceInMilliseconds = Date.now() - new Date(createdAt);

  return (
    <div className="comment">
      <div className="comment-full">
        <div className="vote-buttons">
          <button
            className="upVote"
            onClick={() => {
              props.onUpvote(id);
            }}
          >
            &#11014;
          </button>
          <button
            className="downVote"
            onClick={() => {
              props.onDownvote(id);
            }}
          >
            &#11015;
          </button>
        </div>
        <div className="comment-info-container">
          <div className="comment-info">
            <p className="username">{userObject[0].username}</p>
            <p className="points"> {points} points </p>
            <p className="time">
              {" "}
              {timeConversion(timeDifferenceInMilliseconds)} ago
            </p>
          </div>

          <p className="comment-text">{text}</p>
        </div>
      </div>
      <div className="child-comments">
        <Comments
          data={[props.data, comments]}
          users={USERS}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
        />
      </div>
    </div>
  );
};

export default Comment;
